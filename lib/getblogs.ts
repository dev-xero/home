import path from 'path';
import fs from 'fs';
import { cache } from 'react';
import matter from 'gray-matter';
import getReadingTime from '@/util/get-reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';

import moonlightTheme from '../shiki/moonlight-ii.json' assert { type: 'json' };

const rehypeOptions = {
    theme: moonlightTheme,
    // onVisitLine(node: any) {
    //     if (node.children.length === 0) {
    //         node.children = [{ type: 'text', value: ' ' }];
    //     }
    // },
    // onVisitHighlightedLine(node: any) {
    //     node.properties.className.push('highlighted');
    // },
};

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

type Metadata = {
    title: string;
    summary: string;
    publishedOn: string;
    tags: string[];
    published: boolean;
    image: string;
};

function getBlogFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

export interface IBlog {
    metadata: Metadata;
    readingTime: string;
    content: string;
    slug: string;
    source: any;
}

// Read each blog post and return them
async function fetchBlogs() {
    const posts = getBlogFiles(BLOG_DIR);

    const blogPosts = await Promise.all(
        posts.map(async (post) => {
            const filePath = path.join(BLOG_DIR, post);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContent);
            const readingTime = getReadingTime(content);

            const mdxSource = await serialize(content, {
                mdxOptions: {
                    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
                },
            });

            return {
                metadata: data as Metadata,
                readingTime: readingTime,
                content: content,
                slug: post.replace(/\.mdx?$/, ''),
                source: mdxSource,
            };
        })
    );

    return blogPosts;
}

// Cache retrieval
export const getBlogs = cache(fetchBlogs);

export async function getBlog(slug: string) {
    let blogs = await getBlogs();
    if (process.env.APP_ENV != 'development') {
        blogs = blogs.filter(
            (blog) => blog.metadata && blog.metadata.published == true
        );
    }

    const blog = blogs.find((blog) => blog.slug === slug);
    return blog;
}

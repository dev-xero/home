import path from 'path';
import fs from 'fs';
import { cache } from 'react';
import matter from 'gray-matter';
import getReadingTime from '@/util/get-reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

// function copyCode(textElement: HTMLElement) {
//     const codeElement = textElement.nextElementSibling;
//     if (codeElement && codeElement.tagName === 'CODE') {
//         const textarea = document.createElement('textarea');
//         textarea.value = codeElement.textContent!;
//         document.body.appendChild(textarea);
//         textarea.select();
//         document.execCommand('copy');
//         document.body.removeChild(textarea);
//         textElement.textContent = 'Copied!';
//         setTimeout(() => (textElement.textContent = 'Copy'), 1500);
//     }
// }
//
import moonlightTheme from '../shiki/moonlight-ii.json' assert { type: 'json' };

import { visit } from 'unist-util-visit';

const rehypePrettyCodeOptions = {
    theme: moonlightTheme,
};

const BLOG_DIR = path.join(process.cwd(), 'public/content/blog');

type Metadata = {
    title: string;
    summary: string;
    jsDate: string;
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
                    rehypePlugins: [
                        () => (tree) => {
                            visit(tree, (node) => {
                                if (
                                    node?.type === 'element' &&
                                    node?.tagName === 'pre'
                                ) {
                                    const [codeEl] = node.children;

                                    if (codeEl.tagName !== 'code') return;

                                    node.raw = codeEl.children?.[0].value;
                                }
                            });
                        },
                        () => (tree) => {
                            visit(tree, (node) => {
                                if (
                                    node?.type === 'element' &&
                                    node?.tagName === 'div'
                                ) {
                                    if (
                                        !(
                                            'data-rehype-pretty-code-fragment' in
                                            node.properties
                                        )
                                    ) {
                                        return;
                                    }

                                    for (const child of node.children) {
                                        if (child.tagName === 'pre') {
                                            child.properties['raw'] = node.raw;
                                        }
                                    }
                                }
                            });
                        },
                        [rehypePrettyCode, rehypePrettyCodeOptions],
                        rehypeAutoLinkHeadings,
                        rehypeSlug,
                        // [
                        //     rehypeToc,
                        //     {
                        //         headings: ['h1'],
                        //         position: 'afterbegin',
                        //         cssClasses: {
                        //             toc: 'toc not-prose',
                        //             link: 'toc-link',
                        //         },
                        //     },
                        // ],
                    ],
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

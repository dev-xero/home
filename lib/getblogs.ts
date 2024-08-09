import path from 'path';
import fs from 'fs';
import { cache } from 'react';
import matter from 'gray-matter';
import getReadingTime from '@/util/get-reading-time';

const BLOGS_FOLDER = path.join(process.cwd(), 'content', 'blogs');

type Metadata = {
    title: string;
    summary: string;
    publishedOn: string;
    tags: string[];
    published: boolean;
    image?: string;
};

function getBlogFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

export function getBlogs() {
    return cache(() => {
        const posts = getBlogFiles(BLOGS_FOLDER);
        return posts.map((post) => {
            const filePath = path.join(BLOGS_FOLDER, post);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContent);
            const readingTime = getReadingTime(content);
            return {
                metadata: data as Partial<Metadata>,
                readingTime: readingTime,
                content: content,
                slug: post.replace(/\.mdx?$/, ''),
            };
        });
    });
}

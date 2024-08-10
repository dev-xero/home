'use client';

import { IBlog } from '@/lib/getblogs';
import Container from './Container';
import Header from './ui/Header';
import MDXRenderer from './mdx/MDXRenderer';
import { ArrowLeft02Icon } from 'hugeicons-react';

interface IBlogContentProps {
    blog: IBlog;
}

export default function BlogContent({ blog }: IBlogContentProps) {
    return (
        <Container>
            <>
                <Header
                    active="blog"
                    aboutRedirect="/about"
                    projectRedirect="/projects"
                />

                <main className="mt-24">
                    <a href="./blog" className="flex gap-2 items-center text-grey-050 hover:text-white underline-offset-4 hover:underline">
                        <ArrowLeft02Icon />
                        <span>Back</span>
                    </a>
                    <h1 className="mt-12 font-bold text-3xl mb-4">
                        {blog.metadata.title}
                    </h1>
                    <p className="text-grey-050 leading-[26px] mb-8">
                        {blog.metadata.summary}
                    </p>
                    <MDXRenderer source={blog.source} />
                </main>
            </>
        </Container>
    );
}

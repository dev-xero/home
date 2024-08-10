'use client';

import { IBlog } from '@/lib/getblogs';
import Container from './Container';
import Header from './ui/Header';
import MDXRenderer from './mdx/MDXRenderer';

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

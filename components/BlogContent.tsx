'use client';

import { IBlog } from '@/lib/getblogs';
import Container from './Container';
import Header from './ui/Header';
import MDXRenderer from './mdx/MDXRenderer';
import {
    ArrowLeft02Icon,
    BookOpen01Icon,
    Calendar03Icon,
    ViewIcon,
} from 'hugeicons-react';
import BreadCrumbs from './Breadcrumbs';

interface IBlogContentProps {
    blog: IBlog;
    views: number;
    slug: string;
}

export default function BlogContent({ blog, views }: IBlogContentProps) {
    // useEffect(() => {
    //     const updateViews = async () => {
    //         try {
    //             await fetch(`${constants.VIEWS_ENDPOINT}/update?slug=${encodeURIComponent(slug)}`, {
    //                 method: 'POST',
    //                 next: { revalidate: 10 }
    //             }).then(res => {
    //                 if (!res.ok) {
    //                     throw new Error("Not ok.")
    //                 }
    //                 return res.json()
    //             })
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };
    // }

    return (
        <Container>
            <>
                <Header
                    active="blog"
                    aboutRedirect="/about"
                    projectRedirect="/projects"
                />

                <main className="mt-16">
                    <a
                        href="/blog"
                        className="flex gap-2 items-center text-grey-050 hover:text-white underline-offset-4 hover:underline text-sm"
                    >
                        <ArrowLeft02Icon size={18} />
                        <span>Back</span>
                    </a>
                    <BreadCrumbs page={blog.metadata.title} url={blog.slug} />
                    <h1 className="mt-6 font-bold text-3xl mb-4">
                        {blog.metadata.title}
                    </h1>
                    <p className="text-grey-050 leading-[26px] mb-8">
                        {blog.metadata.summary}
                    </p>
                    <section className="mt-2 mb-6 sm:flex items-center justify-between">
                        <div className="flex items-center gap-4 sm:mb-0 mb-4 text-xs sm:!text-sm">
                            {/* VIEWS */}
                            <div className="flex items-center gap-2 cursor-default">
                                <ViewIcon size={20} className="text-blue" />
                                <span className="text-grey-050">
                                    {views} {views == 1 ? 'view' : 'views'}
                                </span>
                            </div>
                            {/* READING TIME */}
                            <div className="flex items-center gap-2 cursor-default">
                                <BookOpen01Icon
                                    size={20}
                                    className="text-blue"
                                />
                                <span className="text-grey-050">
                                    {blog.readingTime}
                                </span>
                            </div>
                            {/* CALENDAR */}
                            <div className="flex items-center gap-2 cursor-default">
                                <Calendar03Icon
                                    size={20}
                                    className="text-blue"
                                />
                                <span className="text-grey-050">
                                    {blog.metadata.publishedOn}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {blog.metadata.tags.map((tag, id) => (
                                <span key={id} className="text-grey-050">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </section>
                    <MDXRenderer source={blog.source} />
                </main>
            </>
        </Container>
    );
}

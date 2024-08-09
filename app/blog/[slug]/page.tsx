// import { MDXProvider } from '@mdx-js/react';
import { notFound } from 'next/navigation';
import personal from '@/data/personal';
import { getBlogs } from '@/lib/getblogs';
import { getDateTime } from '@/util/get-date-time';
import type { Metadata } from 'next';

export async function generateMetadata({
    params,
}: {
    params: any;
}): Promise<Metadata | undefined> {
    const blog = getBlogs().find((post) => post.slug === params.slug);

    if (!blog) {
        return notFound();
    }

    let {
        title,
        publishedOn: publishedOn,
        summary: description,
        image,
        tags,
    } = blog.metadata;
    let ogImage = 'https://home-xero.netlify.app/og-img.png';

    return {
        title,
        description,
        keywords: tags ? tags : [],
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: publishedOn,
            url: `${personal.url}/blog/${blog.slug}`,
            images: [{ url: ogImage }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function BlogPage({ params }: any) {
    const blog = getBlogs().find((post) => post.slug === params.slug);

    if (!blog) {
        return notFound();
    }

    return (
        <section>
            <script>
                {/* Optimizations */}
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BlogPosting',
                            headline: blog.metadata.title,
                            datePublished: getDateTime(
                                blog.metadata.publishedOn
                            ),
                            dateModified: getDateTime(
                                blog.metadata.publishedOn
                            ),
                            description: blog.metadata.summary!,
                            image: 'https://home-xero.netlify.app/og-img.png', // change to blog img later
                            url: `${personal.url}/blog/${blog.slug}`,
                            author: {
                                '@type': 'Person',
                                name: 'Xero',
                                url: `${personal.url}`,
                            },
                        }),
                    }}
                />
            </script>
            {/* Content */}
            <article>
                <div>{blog.content}</div>
            </article>
        </section>
    );
}

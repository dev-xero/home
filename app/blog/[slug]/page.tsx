import MDXRenderer from '@/components/mdx/MDXRenderer';
import personal from '@/data/personal';
import { getBlog } from '@/lib/getblogs';
import { notFound } from 'next/navigation';

// Metadata optimizations
export async function generateMetadata({ params }: any) {
    const blog = await getBlog(params.slug);

    if (!blog) {
        return {
            title: 'Page not found.',
            description: 'This page does not exist.',
            type: 'article',
            url: `${personal.url}/blog/${params.slug}`,
            icons: {
                shortcut: 'favicon.svg',
            },
            // TODO: Change to blog img later
            images: [
                {
                    url: 'https://home-xero.netlify.app/og-img.png',
                    width: 600,
                    height: 600,
                },
            ]
        };
    }

    return {
        title: blog.metadata.title,
        description: blog.metadata.summary,
        icons: {
            shortcut: 'favicon.svg',
        },
    };
}

// Blog page content
export default async function SingleBlogPage({ params }: { params: any }) {
    const blog = await getBlog(params.slug);

    if (!blog) {
        return notFound();
    }

    return (
        <div>
            <h1>{blog.metadata.title}</h1>
            <p>{blog.metadata.summary}</p>
            <MDXRenderer source={blog.source} />
        </div>
    );
}

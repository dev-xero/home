import BlogContent from '@/components/BlogContent';
import { getBlog, getBlogs } from '@/lib/getblogs';
import { notFound } from 'next/navigation';

// Metadata optimizations
export async function generateMetadata({ params }: any) {
    const blog = await getBlog(params.slug);

    if (!blog) {
        return {
            title: 'Page not found.',
            description: 'This page does not exist.',
            type: 'website',
            icons: {
                shortcut: '/favicon.svg',
                icon: '/favicon.svg',
            },
            images: [
                {
                    url: 'https://home-xero.netlify.app/og-img.png',
                    width: 600,
                    height: 600,
                },
            ],
        };
    }

    return {
        title: blog.metadata.title,
        description: blog.metadata.summary,
        type: 'article',
        icons: {
            shortcut: '/favicon.svg',
            icon: '/favicon.svg',
        },
        images: [
            {
                url: blog.metadata.image,
                width: 600,
                height: 600,
            },
        ],
    };
}

// Static Params
export async function generateStaticParams() {
    const blogFiles = await getBlogs();

    const slugs = blogFiles.map((file) => ({
        slug: file.slug,
    }));

    return slugs;
}

// Blog page content
export default async function SingleBlogPage({ params }: { params: any }) {
    const blog = await getBlog(params.slug);

    if (!blog) {
        return notFound();
    }

    return <BlogContent blog={blog} />;
}

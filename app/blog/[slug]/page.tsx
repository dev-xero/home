import BlogContent from '@/components/BlogContent';
import personal from '@/data/personal';
import { getBlog, getBlogs } from '@/lib/getblogs';
import constants from '@/shared/constants';
import axios from 'axios';
import { notFound } from 'next/navigation';

// Metadata optimizations
export async function generateMetadata({ params }: { params: any }) {
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
                    url: `${personal.url}/og-img.png`,
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
        openGraph: {
            title: blog.metadata.title,
            description: blog.metadata.summary,
            url: `${personal.url}/blog/${params.slug}`,
            images: [
                {
                    url: blog.metadata.image,
                    width: 600,
                    height: 600,
                },
            ],
        },
    };
}

// Static Params
export async function generateStaticParams() {
    try {
        const blogFiles = await getBlogs();
        return blogFiles.map((file) => ({ slug: file.slug }));
    } catch (err) {
        console.error("Failed to generate static params:", err);
        return [];
    }
}

// Blog page content
export default async function SingleBlogPage({ params }: { params: any }) {
    const blog = await getBlog(params.slug);
    if (!blog) return notFound();

    // increment and await views
    let views = 0;
    try {
        const res = await axios.post(
            `${constants.VIEWS_ENDPOINT}/update?slug=${encodeURIComponent(
                params.slug
            )}`
        );
        const data = res.data;
        // DEBUG: console.log(data);
        views = data['payload']['views'];
    } catch (err) {
        console.error(err);
    }

    return <BlogContent blog={blog} views={views} />;
}

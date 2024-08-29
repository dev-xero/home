import BlogContent from '@/components/BlogContent';
import personal from '@/data/personal';
import { getBlog, getBlogs } from '@/lib/getblogs';
import constants from '@/shared/constants';
import { notFound } from 'next/navigation';

// Static Params
export async function generateStaticParams() {
    try {
        const blogFiles = await getBlogs();
        return blogFiles.map((file) => ({ slug: file.slug }));
    } catch (err) {
        console.error('Failed to generate static params:', err);
        return [];
    }
}

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
            type: 'article',
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

// Blog page content
export default async function SingleBlogPage({ params }: { params: any }) {
    const blog = await getBlog(params.slug);

    if (!blog)
        return notFound();

    let views = 0;
    await fetch(`${constants.VIEWS_ENDPOINT}/update?slug=${encodeURIComponent(params.slug)}`, {
        method: 'POST',
        next: { revalidate: 300 }
    }).then(res => {
        if (!res.ok) {
            throw new Error("Response was not ok.");
        }
        return res.json();
    }).then(data => {
        console.log("Getting...");
        views = data["payload"]["views"];
    }).catch(err => {
        console.error(err);
    });

    return (
        <BlogContent
            blog={blog!}
            views={views}
            slug={params.slug}
        />
    );
}

export const revalidate = 10;

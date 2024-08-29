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
    let blog = null;
    try {
        blog = await getBlog(params.slug);    
        if (!blog)
            return notFound();
    } catch (err) {
        console.error(err);
        return notFound();
    }

    let views = 0;
    let attempts = 0;
    let isSuccessful = false;

    const DEFAULT_URL = constants.VIEWS_ENDPOINT;
    const FALLBACK_URL = constants.VIEWS_FALLBACK_ENDPOINT;
    const retries = 3;

    while (attempts < retries && !isSuccessful) {
        let url = attempts < retries - 1 ? DEFAULT_URL : FALLBACK_URL;

        try {
            const res = await fetch(`${url}/update?slug=${encodeURIComponent(params.slug)}`, { method: 'POST', next: { revalidate: 1200 } });

            if (!res.ok) {
                attempts += 1;
                throw new Error("Request failed.");
            }

            const data = await res.json();
            views = data["payload"]["views"] - 1;
            isSuccessful = true;
            break;
        } catch (err) {
            attempts += 1;
            console.error(`Attempt ${attempts} failed. Error:`, err);

            if (attempts >= retries) {
                console.error("All attempts failed, exiting loop.");
                break;
            } else if (attempts === retries - 1) {
                console.log("Falling back to other endpoint...");
            }

        }
    }

    return (
        <BlogContent
            blog={blog!}
            views={views}
            slug={params.slug}
        />
    );
}

export const revalidate = 10;

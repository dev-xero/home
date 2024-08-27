import personal from '@/data/personal';
import { getBlog } from '@/lib/getblogs';

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

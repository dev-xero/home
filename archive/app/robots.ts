import personal from '@/data/personal';

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: `${personal.url}/sitemap.xml`,
    };
}

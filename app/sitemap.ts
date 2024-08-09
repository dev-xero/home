import personal from '@/data/personal';

// Generate site map
export default async function sitemap() {
    const routes = ['', '/about', '/projects', '/blog'].map((route) => ({
        url: `${personal.url}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes];
}

import personal from '@/data/personal';
import { getBlogs } from '@/lib/getblogs';

// Generate site map
export default async function sitemap() {
    let posts = await getBlogs();
    posts = posts.filter((post) => post.metadata.published);

    const blogs = posts.map((post) => ({
        url: `${personal.url}/blog/${post.slug}`,
        lastModified: post.metadata.publishedOn
            ? new Date(post.metadata.publishedOn).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0],
    }));

    const routes = ['', '/about', '/projects', '/blog'].map((route) => ({
        url: `${personal.url}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes, ...blogs];
}

import { slideUpVariants } from '@/animated/slideup';
import Container from '@/components/Container';
import BlogPage from '@/components/pages/BlogPage';
import Header from '@/components/ui/Header';
import PageTransition from '@/layouts/PageTransition';
import { IBlog, getBlogs } from '@/lib/getblogs';
import constants from '@/shared/constants';
import { notFound } from 'next/navigation';

interface IViewsMap {
    slug: string;
    views: number;
}

export default async function Page() {
    let allBlogs: IBlog[] = await getBlogs();
    allBlogs = allBlogs.filter((blog) => blog.metadata.published);

    // sort by date
    allBlogs = allBlogs.sort((a, b) => {
        const dateA = new Date(a.metadata.jsDate);
        const dateB = new Date(b.metadata.jsDate);

        return dateB.getTime() - dateA.getTime();
    });


    let viewsMap: Array<IViewsMap> = [];

    allBlogs.map(blog => {
        viewsMap.push({
            slug: blog.slug,
            views: 0
        })
    })

    await fetch(`${constants.VIEWS_ENDPOINT}/views`,
        { next: { revalidate: 1200 } })
        .then(res => {
            if (!res.ok) {
                throw new Error("Response failed along the line.");
            }
            return res.json();
        })
        .then((data) => {
            const fetchedViewsMap = data["payload"];
            for (const mapping of fetchedViewsMap) {
                const idx = viewsMap.findIndex(map => map.slug == mapping.slug);
                if (idx != -1) {
                    viewsMap[idx] = mapping;
                }
            }
            console.log("Generated Maps:", viewsMap);
        }).catch((err) => {
            console.error('Failed to generate views map.\nErr:', err);
        });


    return (
        <Container>
            <>
                <Header
                    active="blog"
                    aboutRedirect="/about"
                    projectRedirect="/projects"
                />
                <PageTransition animationVariants={slideUpVariants}>
                    <BlogPage allBlogs={allBlogs} viewsMap={viewsMap} />
                </PageTransition>
            </>
        </Container>
    );
}

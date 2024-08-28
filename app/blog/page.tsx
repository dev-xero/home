import { slideUpVariants } from '@/animated/slideup';
import Container from '@/components/Container';
import BlogPage from '@/components/pages/BlogPage';
import Header from '@/components/ui/Header';
import PageTransition from '@/layouts/PageTransition';
import { IBlog, getBlogs } from '@/lib/getblogs';
import constants from '@/shared/constants';
import axios from 'axios';
import { notFound } from 'next/navigation';

export default async function Page() {
    let allBlogs: IBlog[] = await getBlogs();
    allBlogs = allBlogs.filter((blog) => blog.metadata.published);

    // sort by date
    allBlogs = allBlogs.sort((a, b) => {
        const dateA = new Date(a.metadata.jsDate);
        const dateB = new Date(b.metadata.jsDate);

        return dateB.getTime() - dateA.getTime();
    });

    // Generate views map
    interface IViewsMap {
        slug: string;
        views: number;
    }
    let viewsMap: Array<IViewsMap> = [];
    allBlogs.map(blog => {
        viewsMap.push({
            slug: blog.slug,
            views: 0
        })
    })

    console.log(viewsMap);

    await fetch(`${constants.VIEWS_ENDPOINT}/views`,
        { next: { revalidate: 300 } })
        .then(res => {
            if (!res.ok) {
                throw new Error("Response failed along the line.");
            }
            return res.json();
        })
        .then((data) => {
            const fetchedViewsMap = data["payload"];
            if (fetchedViewsMap.length != 0) {
                for (let i = 0; i < viewsMap.length; i++) {
                    if (viewsMap[i]["slug"] == fetchedViewsMap[i]["slug"]) {
                        viewsMap[i]["views"] = fetchedViewsMap[i]["views"]
                    }
                }

            }
        })
        .catch((err) => {
            console.error('Failed to generate views map.\nErr:', err);
            return notFound();
        });

    console.log(viewsMap);

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

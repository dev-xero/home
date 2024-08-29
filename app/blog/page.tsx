import { slideUpVariants } from '@/animated/slideup';
import Container from '@/components/Container';
import BlogPage from '@/components/pages/BlogPage';
import Header from '@/components/ui/Header';
import PageTransition from '@/layouts/PageTransition';
import { IBlog, getBlogs } from '@/lib/getblogs';
import constants from '@/shared/constants';

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

    let attempts = 0;
    let isSuccessful = false;

    const DEFAULT_URL = constants.VIEWS_ENDPOINT;
    const FALLBACK_URL = constants.VIEWS_FALLBACK_ENDPOINT;
    const retries = 3;

    while (attempts < retries && !isSuccessful) {
        let url = attempts < retries - 1 ? DEFAULT_URL : FALLBACK_URL;

        try {
            const res = await fetch(`${url}/views`, { next: { revalidate: 1200 } });

            if (!res.ok) {
                attempts += 1;
                throw new Error("Request failed.");
            }

            const data = await res.json();
            const fetchedViewsMap = data["payload"];

            for (const mapping of fetchedViewsMap) {
                const idx = viewsMap.findIndex(map => map.slug == mapping.slug);
                if (idx != -1) {
                    viewsMap[idx] = mapping;
                }
            }

            console.log("Generated Maps:", viewsMap);
            isSuccessful = true;
            break;
        } catch (err) {
            console.error(`Attempt ${attempts} failed.`);

            if (attempts >= retries) {
                console.error("All attempts failed, exiting loop.");
                break;
            } else if (attempts === retries - 1) {
                console.log("Falling back to other endpoint...");
            }
        }
    }

    if (!isSuccessful) {
        console.error("Failed to generate view map after retires.");
    }

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

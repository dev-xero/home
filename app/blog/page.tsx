import { slideUpVariants } from '@/animated/slideup';
import Container from '@/components/Container';
import BlogPage from '@/components/pages/BlogPage';
import Header from '@/components/ui/Header';
import PageTransition from '@/layouts/PageTransition';
import { IBlog, getBlogs } from '@/lib/getblogs';

export default async function Page() {
    let allBlogs: IBlog[] = await getBlogs();
    allBlogs = allBlogs.filter((blog) => blog.metadata.published);

    // sort by date
    allBlogs = allBlogs.sort((a, b) => {
        const dateA = new Date(a.metadata.jsDate);
        const dateB = new Date(b.metadata.jsDate);

        return dateB.getTime() - dateA.getTime();
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
                    <BlogPage allBlogs={allBlogs} />
                </PageTransition>
            </>
        </Container>
    );
}

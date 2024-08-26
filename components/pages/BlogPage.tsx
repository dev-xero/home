import { IBlog } from '@/lib/getblogs';
import SubHeading from '../ui/SubHeading';
import BlogCard from '../BlogCard';

interface IViewsMap {
    slug: string;
    views: number;
}
interface IBlogPageProps {
    allBlogs: Array<IBlog>;
    viewsMap: IViewsMap[];
}

export default function BlogPage({ allBlogs, viewsMap }: IBlogPageProps) {
    return (
        <main className="mt-24" id="blog">
            <section className="text-grey-050 mt-4">
                Oh hey there, seems you found my blog. My ramblings oscillate from hard
                technical topics to unhinged anime memes when I&apos;m bored and have nothing else to do. Enjoy.
            </section>

            {/* Render each blog listing */}
            <section className="mt-8">
                <SubHeading text="All Blogs" />
                <section className="mt-8 px-4 flex flex-col gap-4">
                    {allBlogs.length > 0 ? (
                        allBlogs.map((blog, id) => (
                            <BlogCard key={id} blog={blog} views={viewsMap.find(view => view.slug == blog.slug)!["views"] ?? 0} />
                        ))
                    ) : (
                        <h3>No blogs here yet, brewing...</h3>
                    )}
                </section>
            </section>
        </main>
    );
}

import { IBlog } from '@/lib/getblogs';
import SubHeading from '../ui/SubHeading';
import BlogPost from '../BlogPost';

interface IBlogPageProps {
    allBlogs: Array<IBlog>;
}

export default function BlogPage({ allBlogs }: IBlogPageProps) {
    return (
        <main className="mt-24" id="blog">
            <SubHeading text="Not So Shower Thoughts" />
            <section className="text-grey-050 mt-4">
                Oh hey, seems you found my blog. My ramblings range from hard
                technical concepts to unhinged anime memes from time to time
                when I&apos;m bored. Opinions are mine only. Enjoy :)
            </section>
            <section className="mt-8">
                <SubHeading text="All Blogs" />
                <section className="mt-4">
                    {allBlogs.length > 0 ? (
                        allBlogs.map((blog) => (
                            <BlogPost
                                key={blog.slug}
                                title={blog.metadata.title}
                                summary={blog.metadata.summary}
                            />
                        ))
                    ) : (
                        <h3>No blogs here yet, brewing...</h3>
                    )}
                </section>
            </section>
        </main>
    );
}

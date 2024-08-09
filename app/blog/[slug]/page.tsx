import fs from 'fs';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export default function PostPage({
    source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <section>
            <header>
                <title>{source.frontmatter.title as string}</title>
            </header>
            <MDXRemote {...source} />
        </section>
    );
}

export async function getStaticPaths() {
    return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps(
    ctx: GetStaticPropsContext<{
        slug: string;
    }>
) {
    const { slug } = ctx.params!;

    // retrieve the MDX blog post file associated
    // with the specified slug parameter
    const postFile = fs.readFileSync(`content/${slug}.mdx`);

    // read the MDX serialized content along with the frontmatter
    // from the .mdx blog post file
    const mdxSource = await serialize(postFile, { parseFrontmatter: true });
    return {
        props: {
            source: mdxSource,
        },
        // enable ISR
        revalidate: 60,
    };
}

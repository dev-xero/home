'use client';

import { MDXRemote } from 'next-mdx-remote';

export default function MDXRenderer({ source }: { source: any }) {
    return <MDXRemote {...source} />;
}

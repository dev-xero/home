'use client';

import { MDXRemote } from 'next-mdx-remote';
import HeroImage from './HeroImage';
import H1 from './elements/H1';
import Ol from './elements/Ol';

export default function MDXRenderer({ source }: { source: any }) {
    return (
        <article className="text-grey-050">
            <MDXRemote
                suppressHydrationWarning
                {...source}
                components={{
                    HeroImage,
                    h1: H1,
                    ol: Ol,
                }}
            />
        </article>
    );
}

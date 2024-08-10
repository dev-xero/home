'use client';

import { MDXRemote } from 'next-mdx-remote';
import HeroImage from './HeroImage';
import H1 from './elements/H1';
import Ol from './elements/Ol';
import P from './elements/P';
import Spacer from './Spacer';
import H3 from './elements/H3';

export default function MDXRenderer({ source }: { source: any }) {
    return (
        <article className="text-grey-050">
            <MDXRemote
                suppressHydrationWarning
                {...source}
                components={{
                    HeroImage,
                    Spacer,
                    h1: H1,
                    h3: H3,
                    ol: Ol,
                    p: P,
                }}
            />
        </article>
    );
}

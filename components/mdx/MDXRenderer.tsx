'use client';

import { MDXRemote } from 'next-mdx-remote';
import HeroImage from './HeroImage';

export default function MDXRenderer({ source }: { source: any }) {
    return (
        <MDXRemote
            {...source}
            components={{
                HeroImage,
            }}
        />
    );
}

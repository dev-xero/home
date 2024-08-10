'use client';

import Image from 'next/image';

interface IHeroImgProps {
    src: string;
    alt: string;
}

export default function HeroImage({ src, alt }: IHeroImgProps) {
    return (
        <>
            <Image
                src={src}
                alt={alt}
                width={1080}
                height={608}
                className="rounded-lg mb-8"
            />
        </>
    );
}

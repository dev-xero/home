'use client';

import Image from "next/image";

interface IRoundedImageProps {
    src: string,
    alt: string
}

export default function RoundedImage({ src, alt }: IRoundedImageProps) {
    return (
        <>
            <Image
                src={src}
                alt={alt}
                width={1020}
                height={200}
                priority={true}
                className="rounded-md my-4"
            />
        </>
    );
}

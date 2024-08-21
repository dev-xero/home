'use client';

import Image from "next/image";

interface IRoundedImageProps {
    src: string,
    alt: string,
    context?: string
}

export default function RoundedImage({ src, alt, context }: IRoundedImageProps) {
    return (
        <div className="my-4 flex flex-col items-center gap-2">
            <Image
                src={src}
                alt={alt}
                width={1020}
                height={200}
                priority={true}
                className="rounded-md"
            />
            {context && <span className="my-2 text-grey-100 font-normal w-full text-center">{context}</span>}
        </div>
    );
}

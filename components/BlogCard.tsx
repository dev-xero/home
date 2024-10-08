import { IBlog } from '@/lib/getblogs';
import Image from 'next/image';
import { Calendar04Icon } from 'hugeicons-react';

interface IBlogCardProps {
    blog: IBlog;
    views: number;
}

export default function BlogCard(props: IBlogCardProps) {
    return (
        <div className="transition-all hover:scale-105 group rounded-sm overflow-hidden bg-[#0F131A]">
            <a
                href={`./blog/${props.blog.slug}`}
                className="flex flex-col sm:flex-row"
            >
                <Image
                    width={280}
                    height={148}
                    priority={true}
                    src={props.blog.metadata.image}
                    alt={props.blog.metadata.summary}
                    className="w-full sm:max-w-[280px] object-cover"
                />
                <section className="p-4 sm:p-6 flex-1 max-w-[600px] overflow-hidden">
                    <h2 className="text-xl font-bold mb-2 group-hover:underline truncate">
                        {props.blog.metadata.title}
                    </h2>
                    <p className="text-md text-grey-050 mb-4 truncate">
                        {props.blog.metadata.summary}
                    </p>
                    {/* TAGS */}
                    <div className="flex gap-2 mb-2">
                        {props.blog.metadata.tags.length > 0
                            ? props.blog.metadata.tags.map((tag, id) => (
                                <span
                                    key={id}
                                    className="px-2 bg-green text-bg-dark font-bold text-sm"
                                >
                                    {tag}
                                </span>
                            ))
                            : ''}
                    </div>
                    <section className="flex gap-2 flex-col sm:flex-row sm:items-center">
                        <div className="flex gap-2 items-center mt-2">
                            <span className="flex gap-2 items-center text-grey-100 text-sm">
                                <span className="hidden sm:inline">•</span>
                                {props.blog.readingTime}
                            </span>
                            <span className="flex gap-2 items-center text-grey-100 text-sm">
                                <span>•</span>
                                {props.views} views
                            </span>
                        </div>
                        <span className="flex gap-2 items-center text-grey-100 mt-2 text-sm sm:!order-first">
                            <Calendar04Icon size={16} />
                            {props.blog.metadata.publishedOn}
                        </span>
                    </section>
                </section>
            </a>
        </div>
    );
}

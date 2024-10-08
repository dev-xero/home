import Image from 'next/image';

interface BookProps {
    src: string;
    title: string;
    description: string;
    author: string;
    status: 'STARTED' | 'READING' | 'COMPLETED' | 'PLAN TO READ';
    percentage: number;
}

export default function Book(props: BookProps) {
    return (
        <>
            <div className="flex flex-col sm:flex-row gap-2 flex-grow">
                <Image
                    width={200}
                    height={300}
                    src={props.src}
                    alt={props.title}
                    priority={true}
                    className="rounded-md border-2 border-light-dark w-[200px] h-[300px] sm:w-[130px] sm:h-[200px]"
                />
                <section className="mt-2 sm:ml-2">
                    <p className="font-normal text-grey-050 mb-4">
                        <span className="font-bold">Synopsis:</span>{' '}
                        {props.description}
                    </p>
                    <p className="font-bold text-grey-100 mb-4">
                        By {props.author}
                    </p>
                    <section className="border-t-2 border-light-dark py-4">
                        <ul>
                            <li>
                                Status:{' '}
                                <span className="font-bold text-white">
                                    {props.status}
                                </span>
                            </li>
                            <li>
                                Read:{' '}
                                <span className="font-bold text-white">
                                    {props.percentage}%
                                </span>
                            </li>
                        </ul>
                    </section>
                </section>
            </div>
        </>
    );
}

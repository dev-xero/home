import Image from 'next/image';

interface IAnimeRatingCardProps {
    rating: number;
    src: string;
    review: string;
}

export default function AnimeRatingCard(props: IAnimeRatingCardProps) {
    let remark = '';

    if (props.rating < 0.2) remark = 'Literal Garbage';
    else if (props.rating < 0.3) remark = 'Waste of Time';
    else if (props.rating < 0.4) remark = 'Meh, Not Too Bad';
    else if (props.rating < 0.6) remark = 'Watchable';
    else if (props.rating < 0.8) remark = 'Would Recommend';
    else if (props.rating < 0.9) remark = 'One of the Best!';
    else if (props.rating < 1.0) remark = 'Peak Right There'
    else if (props.rating == 1.0) remark = 'Masterpiece, HIM!';

    return (
        <section className="w-full relative rounded-lg my-4">
            <div className="w-full min-h-full relative">
                <Image
                    src={props.src}
                    alt={props.review}
                    width={1200}
                    height={675}
                    className="absolute top-0 left-0 max-h-[200px] h-[200px] object-cover"
                />
                <div className="block absolute inset-0 bg-bg-dark bg-opacity-70 backdrop-blur-lg w-full h-[200px] z-[10]" />
            </div>
            <section className="z-[30] mt-4 w-full min-h-[200px] relative">
                <div className="block sm:flex">
                    <div className="relative w-full">
                        <Image
                            src={props.src}
                            alt={props.review}
                            width={354}
                            height={0}
                            className="object-cover w-full sm:!w-[354px]"
                        />
                        <div className="p-4 w-full place-items-center grid sm:hidden bg-light-dark">
                            <div className="z-[20]">
                                <section className="text-white">
                                    <h2 className="text-2xl font-bold mb-2">
                                        {remark}
                                    </h2>
                                </section>
                                <span className="text-grey-050">
                                    {props.review}
                                </span>
                                <p className="text-white font-bold text-lg my-4">
                                    {props.rating * 100}%
                                </p>
                                <div className="w-full bg-[#090C10] h-1 block relative mt-4">
                                    <div
                                        className={`w-[${
                                            props.rating * 100
                                        }%] bg-green h-1 block absolute top-0 left-0`}
                                        style={{
                                            width: `${props.rating * 100}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 w-full place-items-center hidden sm:grid">
                        <div>
                            <section className="text-white">
                                <h2 className="text-2xl font-bold mb-2">
                                    {remark}
                                </h2>
                            </section>
                            <span className="text-grey-050">
                                {props.review}
                            </span>
                            <p className="text-white font-bold text-lg my-4">
                                {props.rating * 100}%
                            </p>
                            <div className="w-full bg-[#090C10] h-1 block relative mt-4">
                                <div
                                    className={`w-[${
                                        props.rating * 100
                                    }%] bg-green h-1 block absolute top-0 left-0`}
                                    style={{ width: `${props.rating * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

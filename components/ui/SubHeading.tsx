interface SubHeadingProps {
    text: String
}

export default function SubHeading({ text }: SubHeadingProps) {
    return (
        <section className="inline-block">
            <h3 className="font-bold text-xl">{text}</h3>
            <div className="max-w-[30%] h-1 bg-green mt-2"></div>
        </section>
    )
}
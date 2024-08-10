interface SubHeadingProps {
    text: String
}

export default function SubHeading({ text }: SubHeadingProps) {
    return (
        <section className="flex flex-col sm:flex-row gap-4 sm:items-center mt-2">
            <h3 className="font-bold text-xl min-w-[140px] text-white">{text}</h3>
            <div className="w-full h-[2px] bg-light-dark opacity-50"></div>
        </section>
    )
}
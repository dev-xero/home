import skillData from "@/data/skills"
import SubHeading from "./ui/SubHeading"
import Image from "next/image"
import personal from "@/data/personal"

export default function Skills() {
    return (
        <main className="mt-8" id="skills">
            <SubHeading text="SKILLS" />
            <section className="text-grey-050 mt-4">
                <p>
                    I started programming when I was{" "}
                    <span className="green">{personal.years_programming}</span>,
                    so here&apos;s some of the languages, frameworks, and tools I work
                    with regularly.
                </p>
                <section className="mt-8 grid gap-8 grid-cols-3 sm:grid-cols-4 md:grid-cols-8 justify-items-center">
                    {skillData.map((skill, id) => (
                        <div
                            key={id}
                            className="group cursor-pointer flex flex-col gap-4 items-center justify-center text-center transition-all select-none"
                        >
                            <Image
                                src={skill.img}
                                width={64}
                                height={64}
                                alt={skill.name}
                                priority={true}
                                className="group-hover:opacity-100 opacity-80 transition-opacity"
                            />
                            <label className="text-sm transition-colors group-hover:text-blue">
                                {skill.name}
                            </label>
                        </div>
                    ))}
                </section>
            </section>
        </main>
    )
}

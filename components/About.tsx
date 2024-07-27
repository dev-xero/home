import SubHeading from "./ui/SubHeading";

export default function About() {
    return (
        <main className="mt-24 min:mt-20" id="about">
            <SubHeading text="ABOUT ME" />
            <div className="text-grey-050 mt-4">
                <p className="leading-[26px]">
                    Hey there (おはよう), I&apos;m a CS student and aspiring software engineer. I go by Xero online; nice to meet you. I primarily do backend programming with <span className="blue">Go</span> and <span className="blue">Typescript</span>, but also dabble with low-level <span className="blue">C</span> stuff and Android development occasionally. 
                </p>
                <p className="leading-[26px]">
                    Asides programming, I&apos;m interested in <a href="https://anilist.co/user/xeroDev" target="_blank" className="decoration-dashed hover:underline underline-offset-4 border-spacing-2">anime (weeb much?)</a>, chess and art.
                </p>
            </div>
        </main>
    )
}
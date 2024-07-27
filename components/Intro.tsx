import SubHeading from './ui/SubHeading';

export default function Intro() {
    return (
        <main className="mt-24" id="about">
            <SubHeading text="ABOUT ME" />
            <section className="text-grey-050 mt-4">
                <p className="leading-[26px]">
                    Hey there (おはよう), I&apos;m a CS student and aspiring
                    software engineer. I go by Xero online; nice to meet you. I
                    primarily do backend programming with{' '}
                    <span className="blue">Go</span> and{' '}
                    <span className="blue">Typescript</span>, but also dabble
                    with low-level <span className="blue">C</span> stuff and
                    Android development occasionally.
                </p>
                <p className="leading-[26px]">
                    Asides programming, I&apos;m interested in{' '}
                    <a
                        href="https://anilist.co/user/xeroDev"
                        target="_blank"
                        className="decoration-dashed hover:underline underline-offset-4 border-spacing-2"
                    >
                        anime (otaku much?)
                    </a>
                    , chess and art.
                </p>
                <p className="mt-4">
                    <a
                        href="/about"
                        className="decoration-dashed hover:underline underline-offset-4 hover:text-blue transition-colors"
                    >
                        Hmm, more?
                    </a>
                </p>
            </section>
        </main>
    );
}

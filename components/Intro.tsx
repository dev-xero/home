import SubHeading from './ui/SubHeading';
import ExternalLink from './ui/ExternalLink';

export default function Intro() {
    return (
        <main className="mt-24" id="about">
            <SubHeading text="ABOUT ME" />
            <section className="text-grey-050 mt-4">
                <p className="leading-[26px]">
                    Hey there (おはよう), I&apos;m currently a CS student and
                    aspiring software engineer. I go by Xero online; nice to
                    meet you. I specialize in backend engineering with{' '}
                    <span className="blue">Go</span> and{' '}
                    <span className="blue">Typescript</span>, and also dabble
                    with low-level <span className="blue">C</span> programming
                    and Android development occasionally.
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
                    <ExternalLink text="More about me" hyperlink="/about" />
                </p>
            </section>
        </main>
    );
}

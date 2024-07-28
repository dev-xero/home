import { LinkSquare02Icon } from 'hugeicons-react';
import SubHeading from '../ui/SubHeading';
import personal from '@/data/personal';

export default function AboutPage() {
    return (
        <main className="mt-24" id="about">
            <SubHeading text="HEY I'M XERO" />
            <section className="text-grey-050 mt-4">
                <p className="leading-[26px]">
                    I am a software engineer with a strong background in Computer Science fundamentals such as data structures and algorithms. I&apos;m currently a <span className="text-white">{personal.school_year} </span> {' '} undergraduate student, pursuing a Bachelor&apos;s degree in
                    Computer Science with a focus on applying Machine Learning on the web.
                </p>
                <p className="leading-[26px] mt-4">
                    Currently, I mainly work with scalable backend systems
                    (API/MicroServices/DB). Huge fan of Open Source development,
                    I&apos;ve built several tools, libraries, web applications and
                    all open sourced on{' '}
                    <span className="green">
                        <a href="https://github.com/dev-xero">GitHub</a>
                    </span>
                    .
                </p>
                <p className="leading-[26px] mt-4">
                    My many technical skill sets is include fullstack development (web + android), creating impressive, performant and scalable software systems, some even integrated with machine learning.
                </p>
                <p className="leading-[26px] mt-4">
                    Anime nerd (otaku) and low-level programming enthusiast.
                </p>
            </section>
            <p className="mt-8">
                <a href="/projects" className="decoration-dashed underline-4 hover:underline text-grey-050 flex gap-2 items-center transition-colors hover:text-blue">
                    <span>My Projects</span>
                    <LinkSquare02Icon size={16} />
                </a>
            </p>
        </main>
    );
}

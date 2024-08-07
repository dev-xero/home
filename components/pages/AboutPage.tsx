import { LinkSquare02Icon } from 'hugeicons-react';
import SubHeading from '../ui/SubHeading';
import personal from '@/data/personal';
import ExternalLink from '../ui/ExternalLink';

export default function AboutPage() {
    return (
        <main className="mt-24" id="about">
            <SubHeading text="HEY I'M XERO" />
            <section className="text-grey-050 mt-4">
                <p className="leading-[26px]">
                    I am a software engineer with a strong background in
                    Computer Science fundamentals such as data structures and
                    algorithms. I&apos;m currently a{' '}
                    <span className="text-white">{personal.school_year} </span>{' '}
                    undergraduate student, pursuing a Bachelor&apos;s degree in
                    Computer Science with a focus on applying Machine Learning
                    on the web.
                </p>
                <p className="leading-[26px] mt-4">
                    Currently, I work with scalable backend systems
                    (API/MicroServices/DB). Huge fan of Open Source development,
                    I&apos;ve built several tools, libraries, web applications
                    and all open sourced on{' '}
                    <ExternalLink
                        text="GitHub."
                        hyperlink="https://github.com/dev-xero"
                    />
                </p>
                <p className="leading-[26px] mt-4">
                    My many technical skills include fullstack development (web
                    + android), UI design, creating fast, efficient applications
                    some even integrated with machine learning.
                </p>
                <p className="leading-[26px] mt-4">
                    Anime nerd (otaku), chess and low-level programming enthusiast.
                </p>
            </section>
            <p className="mt-8">
                <ExternalLink text="My Projects" hyperlink='/projects'/>
            </p>
        </main>
    );
}

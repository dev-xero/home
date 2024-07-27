import projectsData from '@/data/projects';
import SubHeading from './ui/SubHeading';
import { GithubIcon, LinkSquare02Icon, Download04Icon } from 'hugeicons-react';

export default function Projects() {
    return (
        <main className="mt-8" id="projects">
            <SubHeading text="PROJECTS" />
            <section className="text-grey-050 mt-4">
                <p>
                    Some notable? (open source) stuff I&apos;ve worked on
                    recently, more on my{' '}
                    <span className="blue">
                        <a href="https://github.com/dev-xero" target="_blank">
                            GitHub
                        </a>
                    </span>
                    .
                </p>
                <section className="mt-4">
                    <ul className="flex flex-col gap-8 sm:gap-4 px-6">
                        {projectsData.map((project, id) => (
                            <li
                                key={id}
                                className="cursor-pointer hover:text-white transition-colors flex sm:flex-row flex-col gap-4 sm:gap-8 sm:items-center"
                            >
                                <div className="flex gap-4 items-center">
                                    <a href={project.source} target="_blank">
                                        <GithubIcon
                                            size={16}
                                            className="hover:text-blue transition-all"
                                        />
                                    </a>
                                    {project.external &&
                                    project.type == 'app' ? (
                                        <a
                                            href={project.external}
                                            target="_blank"
                                        >
                                            <Download04Icon
                                                size={16}
                                                className="hover:text-green transition-colors"
                                            />
                                        </a>
                                    ) : (
                                        <a
                                            href={project.external}
                                            target="_blank"
                                        >
                                            <LinkSquare02Icon
                                                size={16}
                                                className="hover:text-green transition-colors"
                                            />
                                        </a>
                                    )}
                                </div>
                                <span>{project.title}</span>
                            </li>
                        ))}
                    </ul>
                </section>
                <p className="mt-8">
                    <a
                        href="/projects"
                        className="decoration-dashed underline-4 hover:underline text-grey-050 flex gap-2 items-center transition-colors hover:text-blue"
                    >
                        <span>More</span>
                        <LinkSquare02Icon size={16} />
                    </a>
                </p>
            </section>
        </main>
    );
}

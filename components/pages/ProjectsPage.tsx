'use client';

import { Search01Icon } from 'hugeicons-react';
import SubHeading from '../ui/SubHeading';
import { ChangeEvent, useState } from 'react';
import FilterChip from '../ui/FilterChip';
import { TAGS, filters } from '@/data/filters';
import osProjects from '@/data/osprojects';
import ProjectCard from '../ui/ProjectCard';
import PageTransition from '@/layouts/PageTransition';
import { slideUpVariants } from '@/animated/slideup';

export default function ProjectsPage() {
    const [search, updateSearch] = useState('');
    const [selectedFilter, updateSelectedFilter] = useState(TAGS.ALL);
    const filteredProjects = osProjects.filter(
        (project) =>
            project.tags.includes(selectedFilter) &&
            project.name.toLowerCase().includes(search.toLowerCase())
    );

    const onUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
        updateSearch(e.target.value);
    };

    const onUpdateSelectedFilter = (tag: TAGS) => {
        updateSelectedFilter(tag);
    };

    return (
        <main className="mt-24" id="projects">
            <SubHeading text="Projects" />
            <section className="text-grey-050 mt-4">
                <p className="leading-[26px]">
                    Some Open Source projects I&apos;ve worked on recently.
                </p>
            </section>
            {/* Search bar */}
            <div className="bg-bg-dark border-light-dark transition-colors border-2 focus-within:border-white mt-4 w-full mx-auto p-3 flex items-center gap-2 ">
                <Search01Icon size={24} />
                <input
                    type="text"
                    name="project-search"
                    id="project-search"
                    placeholder="search"
                    className="outline-none bg-bg-dark pointer-events-auto w-full"
                    value={search}
                    onChange={(e) => onUpdateSearch(e)}
                />
            </div>
            {/* Filter Chips */}
            <ul className="mt-8 flex gap-4 flex-wrap">
                {filters.map((filter, id) => (
                    <li key={id}>
                        <FilterChip
                            text={filter}
                            id={filter}
                            isSelected={selectedFilter == filter}
                            onClick={() => onUpdateSelectedFilter(filter)}
                        />
                    </li>
                ))}
            </ul>
            {/* Filtered Projects */}
            <section>
                <header className="my-8 pb-4 border-b-2 border-light-dark">
                    <h3 className="font-bold text-xl">
                        {selectedFilter} Projects ({filteredProjects.length})
                    </h3>
                </header>
                <section>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, id) => (
                            <PageTransition
                                animationVariants={slideUpVariants}
                                key={id}
                            >
                                <ProjectCard
                                    key={id}
                                    id={id}
                                    name={project.name}
                                    desc={project.desc}
                                    langs={project.langs}
                                    source={project.source}
                                    preview={project.preview}
                                />
                            </PageTransition>
                        ))
                    ) : (
                        <h3 className="text-grey-050 text-lg">
                            No projects matching this filter yet.
                        </h3>
                    )}
                </section>
            </section>
        </main>
    );
}

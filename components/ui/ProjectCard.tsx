import { ILangMap } from '@/data/langs';
import LangChip from './LangChip';
import { LinkSquare02Icon } from 'hugeicons-react';

interface ProjectCardProps {
    id: number;
    name: string;
    desc: string;
    langs: ILangMap[];
    source: string;
    preview?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <main
            key={props.id}
            className="cursor-pointer my-8 border-b-2 border-opacity-70 border-light-dark p-4"
        >
            <div className="transition-all hover:scale-105 p-4 group">
                <h4 className="font-bold text-xl mb-2 transition-colors group-hover:text-green">
                    {props.name}
                </h4>
                <p className="leading-[26px] text-grey-050 text-sm">
                    {props.desc}
                </p>
                <ul className="flex gap-2 my-4">
                    <li>
                        <a href={props.source} className="text-sm text-grey-050 flex gap-2 items-center underline underline-offset-4 transition-colors hover:text-white">
                            <span>source code</span>
                            <LinkSquare02Icon size={16} />
                        </a>
                    </li>
                    {props.preview && (
                        <li>
                        <a href={props.preview} className="text-sm text-grey-050 flex gap-2 items-center underline underline-offset-4 transition-colors hover:text-white">
                            <span>preview</span>
                            <LinkSquare02Icon size={16} />
                        </a>
                    </li>
                    )}
                </ul>
                <section className="flex flex-col sm:flex-row gap-2 mt-8 px-4">
                    {props.langs.map((lang, id) => (
                        <>
                            <LangChip key={id} details={lang} />
                            {lang != props.langs.at(-1) ? <span className="text-grey-100 opacity-70">|</span> : ''}
                        </>
                    ))}
                </section>
            </div>
        </main>
    );
}

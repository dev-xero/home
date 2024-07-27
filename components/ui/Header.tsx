'use client';

import { GithubIcon, Chess02Icon, Menu09Icon } from 'hugeicons-react';
import { useState } from 'react';
import NavOverlay from './NavOverlay';

interface HeaderProps {
    active: 'about' | 'blog' | 'projects' | 'none';
}

export default function Header({ active }: HeaderProps) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNavigation = () => {
        const body = document.getElementsByTagName('body')[0];
        body.style.overflow =
            body.style.overflow != 'hidden' ? 'hidden' : 'auto';
        setIsNavExpanded(!isNavExpanded);
    };

    return (
        <>
            <div className="transition-all fixed top-0 left-[50%] translate-x-[-50%] z-[1000] max-w-screen-lg w-full px-4 sm:px-8 py-8 bg-bg-dark">
                <header className="flex justify-between items-center bg-bg-dark select-none">
                    {/* Escaping '/' with &#47; */}
                    <h3 className="text-lg font-bold tracking-wide select-none">
                        <a href="/">&#47;&#47; XERO</a>
                    </h3>

                    {/* Navigation Links: Desktop */}
                    <ul className="hidden justify-between items-center gap-4 text-grey-050 transition-colors text-base sm:flex">
                        <li className="hover:text-white transition-all hover:underline underline-offset-4">
                            <a
                                href="https://github.com/dev-xero/home"
                                target="_blank"
                            >
                                source code
                            </a>
                        </li>
                        <li className="hover:text-white transition-all hover:underline underline-offset-4">
                            <a
                                href="#about"
                                className={`${
                                    active == 'about'
                                        ? 'text-white underline'
                                        : ''
                                }`}
                            >
                                about me
                            </a>
                        </li>
                        <li className="hover:text-white transition-all hover:underline underline-offset-4">
                            <a
                                href="#projects"
                                className={`${
                                    active == 'projects'
                                        ? 'text-white underline'
                                        : ''
                                }`}
                            >
                                projects
                            </a>
                        </li>
                        <li className="hover:text-white transition-all hover:underline underline-offset-4">
                            <a
                                href="/blog"
                                className={`${
                                    active == 'blog'
                                        ? 'text-white underline'
                                        : ''
                                }`}
                            >
                                blog
                            </a>
                        </li>
                    </ul>

                    {/* GitHub + Chess */}
                    <ul className="flex items-center gap-4 text-grey-050">
                        <li className="hover:text-white transition-colors select-none">
                            <a
                                href="https://github.com/dev-xero"
                                target="_blank"
                            >
                                <GithubIcon size={24} />
                            </a>
                        </li>
                        <li className="hover:text-white transition-colors select-none">
                            <a
                                href="https://www.chess.com/member/algoxero"
                                target="_blank"
                            >
                                <Chess02Icon size={24} />
                            </a>
                        </li>
                    </ul>

                    {/* Navigation System: Mobile */}
                    <section className="block sm:hidden select-none">
                        <Menu09Icon
                            className="text-grey-050 hover:text-white transition-colors cursor-pointer"
                            size={24}
                            onClick={() => toggleNavigation()}
                        />
                    </section>
                </header>
                {/* Mobile nav menu */}
                <nav
                    className={`${
                        isNavExpanded ? 'h-[110px] mt-8' : 'h-0 mt-0'
                    } transition-all overflow-hidden select-none border-l-2 border-l-green pl-4 sm:hidden block`}
                >
                    <ul className="flex flex-col gap-1 text-grey-050 transition-colors text-base">
                        <li className="hover:text-white transition-all hover:underline underline-offset-4">
                            <a
                                href="https://github.com/dev-xero/home"
                                target="_blank"
                            >
                                source code
                            </a>
                        </li>
                        <li className="hover:text-white transition-all hover:underline underline-offset-4">
                            <a
                                href="#about"
                                className={`${
                                    active == 'about'
                                        ? 'text-white underline'
                                        : ''
                                }`}
                            >
                                about me
                            </a>
                        </li>
                        <li className="hover:text-white transition-all hover:underline underline-offset-4">
                            <a
                                href="#projects"
                                className={`${
                                    active == 'projects'
                                        ? 'text-white underline'
                                        : ''
                                }`}
                            >
                                projects
                            </a>
                        </li>
                        <li className="hover:text-white transition-all hover:underline underline-offset-4">
                            <a
                                href="/blog"
                                className={`${
                                    active == 'blog'
                                        ? 'text-white underline'
                                        : ''
                                }`}
                            >
                                blog
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Nav overlay */}
            </div>
            {isNavExpanded && <NavOverlay />}
        </>
    );
}

'use client';

import { GithubIcon, Moon02Icon, Menu09Icon } from 'hugeicons-react';
import { useState } from 'react';

export default function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div className="transition-all">
            <header className="flex justify-between items-center bg-bg-dark">
                {/* Escaping '/' with &#47; */}
                <h3 className="text-lg font-bold tracking-wide">
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
                        <a href="#about">about me</a>
                    </li>
                    <li className="hover:text-white transition-all hover:underline underline-offset-4">
                        <a href="#projects">projects</a>
                    </li>
                    <li className="hover:text-white transition-all hover:underline underline-offset-4">
                        <a href="/blog">blog</a>
                    </li>
                </ul>

                {/* GitHub + Theme */}
                <ul className="flex items-center gap-4 text-grey-050">
                    <li className="hover:text-white transition-colors">
                        <a href="https://github.com/dev-xero" target="_blank">
                            <GithubIcon size={24} />
                        </a>
                    </li>
                    <li className="cursor-pointer hover:text-white transition-colors">
                        <Moon02Icon size={24} />
                    </li>
                </ul>

                {/* Navigation System: Mobile */}
                <section className="block sm:hidden select-none">
                    <Menu09Icon
                        className="text-grey-050 hover:text-white transition-colors cursor-pointer"
                        size={24}
                        onClick={() => setIsNavExpanded(!isNavExpanded)}
                    />
                </section>
            </header>
            {/* Mobile nav menu */}
            <nav className={`${isNavExpanded ? 'h-[110px]' : 'h-0'} mt-8 transition-all overflow-hidden select-none border-l-2 border-l-green pl-4 sm:hidden block`}>
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
                        <a href="#about">about me</a>
                    </li>
                    <li className="hover:text-white transition-all hover:underline underline-offset-4">
                        <a href="#projects">projects</a>
                    </li>
                    <li className="hover:text-white transition-all hover:underline underline-offset-4">
                        <a href="/blog">blog</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

import {
    Chess02Icon,
    LeetcodeIcon,
    CheckListIcon,
    NewTwitterIcon,
} from 'hugeicons-react';
import SubHeading from './ui/SubHeading';
import personal from '@/data/personal';

export default function Contact() {
    return (
        <main className="mt-8" id="projects">
            <SubHeading text="CONTACT" />
            <section className="text-grey-050 mt-4">
                <p>
                    You want to contact me about something? Cool, just shoot me
                    an email at <span className="green">{personal.public_email}@</span><span className="text-grey-100">gmail.com</span>, 
                    or <span className="blue">@{personal.public_discord}</span> on Discord, 
                    and I promise to get back to
                    you within this century ;) (lol)
                </p>
                <p>In the mean time, here are some other cool links!</p>
                <ul className="flex flex-col sm:flex-row gap-4 sm:items-center mt-8">
                    <li>
                        <a
                            href="https://www.chess.com/member/algoxero"
                            target="_blank"
                            className="flex items-center sm:justify-center gap-2 hover:text-white transition-colors"
                        >
                            <Chess02Icon />
                            <span className="text-sm">Chess</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://leetcode.com/algo-xero"
                            target="_blank"
                            className="flex items-center sm:justify-center gap-2 hover:text-white transition-colors"
                        >
                            <LeetcodeIcon />
                            <span className="text-sm">LeetCode</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://anilist.co/user/XeroDev"
                            target="_blank"
                            className="flex items-center sm:justify-center gap-2 hover:text-white transition-colors"
                        >
                            <CheckListIcon />
                            <span className="text-sm">AniList</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/xero_dev"
                            target="_blank"
                            className="flex items-center sm:justify-center gap-2 hover:text-white transition-colors"
                        >
                            <NewTwitterIcon />
                            <span className="text-sm">Twitter (X?)</span>
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    );
}

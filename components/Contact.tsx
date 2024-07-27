import {
    Chess02Icon,
    LeetcodeIcon,
    CheckListIcon,
    NewTwitterIcon,
} from 'hugeicons-react';
import SubHeading from './ui/SubHeading';

export default function Contact() {
    return (
        <main className="mt-8 min:mt-20" id="projects">
            <SubHeading text="CONTACT" />
            <section className="text-grey-050 mt-4">
                <p>
                    You want to contact me about something? Cool, just shoot me
                    an email at <span className="green">xerodev@</span><span className="text-grey-100">gmail.com</span>, 
                    or <span className="blue">@_xerodev</span> on Discord, 
                    and I promise to get back to
                    you within this century ;) (lol)
                </p>
                <p>In the mean time, here are some other cool links!</p>
                <ul className="flex gap-4 items-center mt-8">
                    <li>
                        <a
                            href="https://www.chess.com/member/algoxero"
                            target="_blank"
                            className="flex items-center justify-center gap-2 hover:text-white transition-colors"
                        >
                            <Chess02Icon />
                            <span className="text-sm">Chess</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://leetcode.com/algo-xero"
                            target="_blank"
                            className="flex items-center justify-center gap-2 hover:text-white transition-colors"
                        >
                            <LeetcodeIcon />
                            <span className="text-sm">LeetCode</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://anilist.co/user/XeroDev"
                            target="_blank"
                            className="flex items-center justify-center gap-2 hover:text-white transition-colors"
                        >
                            <CheckListIcon />
                            <span className="text-sm">AniList</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/xero_dev"
                            target="_blank"
                            className="flex items-center justify-center gap-2 hover:text-white transition-colors"
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

export default function Header() {
    return (
        <header className="flex justify-between items-center p-8 bg-bg-dark">
            {/* Escaping '/' with &#47; */}
            <h3 className="text-lg font-bold tracking-wide">
                <a href="/">&#47;&#47; XERO</a>
            </h3>

            {/* Navigation Links */}
            <ul className="flex justify-between items-center gap-4 text-grey-050 transition-colors">
                <li className="hover:text-white transition-all hover:underline underline-offset-4"><a href="https://github.com/dev-xero/home" target="_blank">source code</a></li>
                <li className="hover:text-white transition-all hover:underline underline-offset-4"><a href="#about">about me</a></li>
                <li className="hover:text-white transition-all hover:underline underline-offset-4"><a href="#projects">projects</a></li>
                <li className="hover:text-white transition-all hover:underline underline-offset-4"><a href="/blog">blog</a></li>
            </ul>
        </header>
    )
}
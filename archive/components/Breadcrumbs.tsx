interface IBreadCrumbsProps {
    page: string;
    url: string;
}

export default function BreadCrumbs({ page, url }: IBreadCrumbsProps) {
    return (
        <>
            <header>
                <ul className="flex items-center gap-2 text-grey-050 my-6 text-sm">
                    <li className="transition-colors hover:text-white">
                        <a href="/">Home</a>
                    </li>
                    <span>/</span>
                    <li className="transition-colors hover:text-white">
                        <a href="/blog">Blog</a>
                    </li>
                    <span>/</span>
                    <li className="transition-colors hover:text-white truncate">
                        <a href={`/blog/${url}`}>{page}</a>
                    </li>
                </ul>
            </header>
        </>
    );
}

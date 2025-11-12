import { ArrowUpRight01Icon } from 'hugeicons-react';

interface IExternalLinkProps {
    text: string;
    hyperlink: string;
}

export default function ExternalLink(props: IExternalLinkProps) {
    return (
        <a
            href={props.hyperlink}
            className="underline-offset-4 underline text-grey-050 inline-flex gap-2 items-center transition-all hover:text-blue"
        >
            <span>{props.text}</span>
            <ArrowUpRight01Icon size={16} />
        </a>
    );
}

interface IBlogPostProps {
    title: string;
    summary: string;
}

export default function BlogPost(props: IBlogPostProps) {
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.summary}</p>
        </>
    );
}

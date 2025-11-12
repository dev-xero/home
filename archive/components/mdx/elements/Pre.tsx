import React from 'react';
import { CopyButton } from '../CopyButton';

function extractTextFromChildren(children: React.ReactNode): string {
    if (typeof children === 'string') {
        return children;
    }
    if (Array.isArray(children)) {
        return children.map(extractTextFromChildren).join('');
    }
    if (React.isValidElement(children)) {
        return extractTextFromChildren(children.props.children);
    }
    return '';
}

export default function Pre({ children, ...props }: any) {
    const raw = extractTextFromChildren(children);

    return (
        <pre {...props} className={'p-0'}>
            <CopyButton text={raw} />
            {children}
        </pre>
    );
}
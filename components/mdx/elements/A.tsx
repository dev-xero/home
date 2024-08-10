import React from 'react';

interface IAProps extends React.HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
}

export default function A({ children, className = '', ...props }: IAProps) {
    return (
        <a
            {...props}
            className={`text-md hover:text-white my-4 text-grey-050 underline ${className}`}
        >
            {children}
        </a>
    );
}

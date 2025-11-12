import React from 'react';

interface IOlProps extends React.HTMLAttributes<HTMLOListElement> {
    children: React.ReactNode;
}

export default function Ol({ children, className = '', ...props }: IOlProps) {
    return (
        <ol
            {...props}
            className={`text-md text-grey-050 list-decimal list-inside px-8 ${className}`}
        >
            {children}
        </ol>
    );
}

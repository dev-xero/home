import React from 'react';

interface IPProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export default function P({ children, className = '', ...props }: IPProps) {
    return (
        <p {...props} className={`text-md leading-[30px] my-2 ${className}`}>
            {children}
        </p>
    );
}

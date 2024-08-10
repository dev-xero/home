import React from 'react';

interface IH1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export default function H1({ children, className = '', ...props }: IH1Props) {
    return (
        <h1
            {...props}
            className={`text-2xl font-bold my-4 text-white ${className}`}
        >
            {children}
        </h1>
    );
}

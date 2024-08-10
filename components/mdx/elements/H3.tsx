import React from 'react';

interface IH3Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export default function H1({ children, className = '', ...props }: IH3Props) {
    return (
        <h3
            {...props}
            className={`text-xl font-bold my-4 text-grey-050 underline ${className}`}
        >
            {children}
        </h3>
    );
}

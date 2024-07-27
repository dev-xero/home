import React from "react"

interface ContainerProps {
    children: React.ReactElement
}

export default function Container({ children }: ContainerProps) {
    return (
        <main className="m-auto max-w-screen-lg w-screen-md py-8 px-4 sm:px-8">
            {children}
        </main>
    )
}
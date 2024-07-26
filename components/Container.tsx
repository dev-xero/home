import React from "react"

interface ContainerProps {
    children: React.ReactElement
}

export default function Container({ children }: ContainerProps) {
    return (
        <main className="m-auto max-w-screen-lg w-screen-md">
            {children}
        </main>
    )
}
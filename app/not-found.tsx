import { DeadIcon } from 'hugeicons-react'

export default function NotFoundPage() {
    return (
        <main className="grid place-items-center min-w-full min-h-screen p-8">
            <div>
                <h3 className="text-xl font-bold flex items-center gap-2"><DeadIcon size={24} /> 404 | Page Not Found</h3>
                <p className="font-light text-grey-050 mt-4">
                    Hmm, seems you got lost. Don&apos;t worry, <a href="/" className="text-blue hover:underline underline-offset-4"> here&apos;s home.</a>
                </p>
            </div>
        </main>
    )
}
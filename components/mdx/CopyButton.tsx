'use client';

import { useState } from 'react';

export const CopyButton = ({ text }: { text: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <button
            onClick={copy}
            disabled={isCopied}
            className="copy-button absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white text-sm px-2 py-1"
        >
            {isCopied ? 'Copied!' : 'Copy'}
        </button>
    );
};

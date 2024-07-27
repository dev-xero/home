import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const space = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ゼロ Xero',
    description: "Xero's space on the internet.",
    icons: {
        shortcut: 'favicon.svg',
    },
    openGraph: {
        locale: 'en_US',
        title: 'ゼロ Xero',
        siteName: 'ゼロ Xero',
        description: "Xero's space on the internet.",
        type: 'website',
        url: 'https://home-xero.netlify.app',
        images: [
            {
                url: '/favicon.svg',
                width: 600,
                height: 600,
                type: 'logo',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={space.className}>{children}</body>
        </html>
    );
}

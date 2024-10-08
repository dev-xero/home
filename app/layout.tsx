import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';
import personal from '@/data/personal';

const sans = Roboto_Flex({ subsets: ['latin'] });

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
        url: `${personal.url}`,
        images: [
            {
                url: `${personal.url}/og-img.png`,
                width: 600,
                height: 600,
            },
        ],
    },
    metadataBase: new URL(`${personal.url}`),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={sans.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}

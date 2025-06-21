import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Imane Ouazzani Chahdi - Full Stack Developer',
    description: 'Imane Ouazzani Chahdi - Full Stack Developer based in Fes, Morocco. Expertise in ReactJS, NestJS, Docker, PostgreSQL, and modern web technologies.',
    keywords: 'Full Stack Developer, ReactJS, NestJS, Docker, PostgreSQL, JavaScript, TypeScript, Fes Morocco',
    authors: [{ name: 'Imane Ouazzani Chahdi' }],
    openGraph: {
        title: 'Imane Ouazzani Chahdi - Full Stack Developer',
        description: 'Committed Full Stack Developer with robust problem-solving skills and expertise in modern web technologies.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Layout } from './components/layout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Felix Pacheco | React Developer',
    description: 'Web Profesional Portfolio',
    icons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon/favicon-32x32.png'
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon/favicon-16x16.png'
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/favicon/apple-touch-icon.png'
        },
        {
            rel: 'android-chrome-icon',
            sizes: '192x192',
            url: '/favicon/android-chrome-192x192.png'
        },
        {
            rel: 'android-chrome-icon',
            sizes: '512x512',
            url: '/favicon/android-chrome-512x512.png'
        }
    ],
    manifest: '/public/favicon/site.webmanifest'
};

interface IProps { children: React.ReactNode }

export default function RootLayout({ children }: IProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}

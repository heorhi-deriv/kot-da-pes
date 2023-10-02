import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainNav from '@/components/main-nav/main-nav';
import MSWWrapper from '@/testing/mocks/msw-wrapper';
import LoadingWrapper from '@/components/loading-wrapper/loading-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Cat And Dog',
    description: 'Website for cat and dog food delivery',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <LoadingWrapper>
                    <MSWWrapper>
                        <MainNav className='h-16 px-3 md:px-5 lg:px-10 ' />
                        {children}
                    </MSWWrapper>
                </LoadingWrapper>
            </body>
        </html>
    );
}

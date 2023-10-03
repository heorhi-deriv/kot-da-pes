import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainNav from '@/components/main-nav/main-nav';
import MSWWrapper from '@/testing/mocks/msw-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Кот да Пес',
    description: 'Сайт доставки еды для кошек и собак',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <MSWWrapper>
                    <MainNav className='h-16 px-3 md:px-5 lg:px-10 ' />
                    {children}
                </MSWWrapper>
            </body>
        </html>
    );
}

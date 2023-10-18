import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/components/cart-provider/cart-provider';
import MainNav from '@/components/main-nav/main-nav';
import MSWWrapper from '@/testing/mocks/msw-wrapper';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    description: 'Сайт доставки еды для кошек и собак',
    title: 'Кот да Пес',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <CartProvider>
                    <MSWWrapper>
                        <MainNav className='h-16 px-3 md:px-5 lg:px-10' />
                        {children}
                    </MSWWrapper>
                </CartProvider>
            </body>
        </html>
    );
}

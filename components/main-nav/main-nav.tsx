'use client';

import { useRef, useState } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useOnClickOutside } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/public/assets/logo.svg';
import { useCart } from '../cart-provider/cart-provider';
import OrderCallDialog from '../order-call-dialog/order-call-dialog';

const routes = [
    { name: 'Готовый корм', path: '/#gotovi_korm' },
    { name: 'Боксы', path: '' },
    { name: 'Говядина', path: '' },
    { name: 'Лакомства', path: '' },
    { name: 'Актуальности', path: '' },
    { name: 'Контакты', path: '' },
];

const MainNav = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const { products } = useCart();
    const ref = useRef<HTMLDivElement>(null);

    const [is_side_nav_open, setIsSideNavOpen] = useState(false);

    useOnClickOutside(ref, () => setIsSideNavOpen(false));

    return (
        <>
            <nav
                className={cn('sticky top-0 z-[1] flex items-center justify-between bg-white shadow-lg', className)}
                {...props}
            >
                <div>
                    <Image alt='logo' height={56} src={Logo} width={62} />
                </div>
                <div className='flex-center gap-4 min-[0px]:max-lg:hidden '>
                    {routes.map(route => {
                        return (
                            <Link
                                className='transform text-sm font-medium text-primary hover:scale-110'
                                href={route.path}
                                key={route.name}
                            >
                                {route.name}
                            </Link>
                        );
                    })}
                    <OrderCallDialog />
                </div>
                <div className='flex-center gap-6'>
                    <ShoppingCart
                        className='transform stroke-primary duration-300 hover:scale-125 hover:cursor-pointer'
                        size={38}
                    />
                    {products.length}
                    <Menu
                        className='transform stroke-primary duration-300 hover:scale-125 hover:cursor-pointer lg:hidden'
                        onClick={() => setIsSideNavOpen(true)}
                        size={48}
                    />
                    <Button className='min-[0px]:max-lg:hidden'>Войти</Button>
                </div>
            </nav>

            <div
                className={cn(
                    'fixed right-0 top-0 z-10 flex h-full w-0 flex-col items-center gap-y-4 overflow-x-hidden bg-primary pt-10 transition-[width] duration-300',
                    {
                        'w-1/2': is_side_nav_open,
                    }
                )}
                ref={ref}
            >
                {routes.map(route => {
                    return (
                        <Link
                            className='text-sm font-medium text-accent transition-colors'
                            href={route.path}
                            key={route.name}
                        >
                            {route.name}
                        </Link>
                    );
                })}
                <OrderCallDialog />
            </div>
        </>
    );
};

export default MainNav;

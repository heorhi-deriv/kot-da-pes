'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/public/assets/logo.svg';
import { Menu, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import OrderCallDialog from '../order-call-dialog/order-call-dialog';

const routes = [
    { name: 'Готовый корм', path: '' },
    { name: 'Боксы', path: '' },
    { name: 'Говядина', path: '' },
    { name: 'Лакомства', path: '' },
    { name: 'Актуальности', path: '' },
    { name: 'Контакты', path: '' },
];

const MainNav = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const ref = useRef<HTMLDivElement>(null);

    const [is_side_nav_open, setIsSideNavOpen] = useState(false);

    useOnClickOutside(ref, () => setIsSideNavOpen(false));

    return (
        <>
            <nav className={cn('relative flex items-center justify-between bg-white shadow-lg', className)} {...props}>
                <div>
                    <Image src={Logo} alt='logo' width={62} height={56} />
                </div>
                <div className='flex-center gap-4 min-[0px]:max-lg:hidden '>
                    {routes.map(route => {
                        return (
                            <Link
                                key={route.name}
                                href={route.path}
                                className='transform text-sm font-medium text-primary hover:scale-110'
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
                    <Menu
                        onClick={() => setIsSideNavOpen(true)}
                        className='transform stroke-primary duration-300 hover:scale-125 hover:cursor-pointer lg:hidden'
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
                            key={route.name}
                            href={route.path}
                            className='text-sm font-medium text-accent transition-colors'
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

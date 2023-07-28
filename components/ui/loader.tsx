import React from 'react';
import { cn } from '@/lib/utils';

type LoaderProps = {
    full_screen?: boolean;
    className?: string;
};

export const Loader = ({ className, full_screen }: LoaderProps) => {
    return (
        <div
            className={cn(
                'flex-center',
                {
                    'absolute inset-0 h-screen w-screen': full_screen,
                },
                className
            )}
        >
            <div
                className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]'
                role='status'
            ></div>
        </div>
    );
};

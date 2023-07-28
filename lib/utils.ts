import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useWindowSize } from 'usehooks-ts';
import { BREAKPOINTS } from '@/constants/constants';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const IsSmallScreen = () => useWindowSize().width <= BREAKPOINTS.SMALL;

export const IsMediumScreen = () => useWindowSize().width <= BREAKPOINTS.MEDIUM;

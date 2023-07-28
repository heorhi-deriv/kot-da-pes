import { useState } from 'react';
import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts';
import { BREAKPOINTS } from '@/constants/constants';

interface WindowSize {
    isSmallScreen: boolean;
    isMediumScreen: boolean;
    window_width: number;
    window_height: number;
}

export function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<Pick<WindowSize, 'window_width' | 'window_height'>>({
        window_width: 0,
        window_height: 0,
    });

    const handleSize = () => {
        setWindowSize({
            window_width: window.innerWidth,
            window_height: window.innerHeight,
        });
    };

    useEventListener('resize', handleSize);

    // Set size at the first client-side load
    useIsomorphicLayoutEffect(() => {
        handleSize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        window_width: windowSize.window_width,
        window_height: windowSize.window_height,
        isSmallScreen: windowSize.window_width <= BREAKPOINTS.SMALL,
        isMediumScreen: windowSize.window_width <= BREAKPOINTS.MEDIUM,
    };
}

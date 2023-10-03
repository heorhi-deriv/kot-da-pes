import { useMediaQuery } from 'usehooks-ts';
import { BREAKPOINTS } from '@/constants/constants';

export const useScreen = () => {
    const is_xsmall_screen = useMediaQuery(`(min-width: ${BREAKPOINTS.XSMALL}px)`);
    const is_small_screen = useMediaQuery(`(min-width: ${BREAKPOINTS.SMALL}px)`);
    const is_medium_screen = useMediaQuery(`(min-width: ${BREAKPOINTS.MEDIUM}px)`);
    const is_large_screen = useMediaQuery(`(min-width: ${BREAKPOINTS.LARGE}px)`);
    const is_xlarge_screen = useMediaQuery(`(min-width: ${BREAKPOINTS.XLARGE}px)`);

    return {
        is_xsmall_screen,
        is_small_screen,
        is_medium_screen,
        is_large_screen,
        is_xlarge_screen,
    };
};

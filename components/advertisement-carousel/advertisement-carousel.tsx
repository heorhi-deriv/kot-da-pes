'use client';
import { useCallback } from 'react';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Coins from '@/public/assets/kot-da-pes-coins.png';
import { useMediaQuery } from 'usehooks-ts';
import { BREAKPOINTS } from '@/constants/constants';
import './advertisement-carousel.css';

const defaultControlsConfig: React.ComponentProps<typeof Carousel>['defaultControlsConfig'] = {
    pagingDotsStyle: { display: 'none' },
};

type TScrollButtonProps = {
    direction: 'left' | 'right';
    nextSlideHandler: VoidFunction;
};

const ScrollButton = ({ direction, nextSlideHandler }: TScrollButtonProps) => {
    return direction === 'left' ? (
        <ChevronLeft
            size={60}
            strokeWidth={2}
            color='#64748b'
            onClick={nextSlideHandler}
            className='ml-[-45px] transform cursor-pointer duration-300 hover:scale-125'
        />
    ) : (
        <ChevronRight
            size={60}
            strokeWidth={2}
            color='#64748b'
            onClick={nextSlideHandler}
            className='mr-[-45px] transform cursor-pointer duration-300 hover:scale-125'
        />
    );
};

const AdvertisementCarousel = () => {
    const is_small_screen = useMediaQuery(`(max-width: ${BREAKPOINTS.SMALL}px)`);
    const is_medium_screen = useMediaQuery(`(max-width: ${BREAKPOINTS.MEDIUM}px)`);

    const getNumberOfSlides = useCallback(() => {
        if (is_small_screen) return 3;
        if (is_medium_screen) return 4;
        return 6;
    }, [is_medium_screen, is_small_screen]);

    return (
        <section className='mx-auto max-w-screen-lg bg-background px-2 py-6 sm:px-10'>
            <Carousel
                autoplay
                autoplayInterval={10000}
                defaultControlsConfig={defaultControlsConfig}
                renderCenterRightControls={({ nextSlide }) => (
                    <ScrollButton direction='right' nextSlideHandler={nextSlide} />
                )}
                renderCenterLeftControls={({ previousSlide }) => (
                    <ScrollButton direction='left' nextSlideHandler={previousSlide} />
                )}
                slidesToShow={getNumberOfSlides()}
                cellSpacing={10}
                withoutControls={is_small_screen}
                wrapAround
            >
                <Image src={Coins} alt='coins' width={160} height={200} />
                <Image src={Coins} alt='coins' width={160} height={200} />
                <Image src={Coins} alt='coins' width={160} height={200} />
                <Image src={Coins} alt='coins' width={160} height={200} />
                <Image src={Coins} alt='coins' width={160} height={200} />
                <Image src={Coins} alt='coins' width={160} height={200} />
                <Image src={Coins} alt='coins' width={160} height={200} />
                <Image src={Coins} alt='coins' width={160} height={200} />
            </Carousel>
        </section>
    );
};

export default AdvertisementCarousel;

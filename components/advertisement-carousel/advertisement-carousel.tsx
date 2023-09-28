'use client';

import { useScreen } from '@/hooks/useScreen';
import Coins from '@/public/assets/kot-da-pes-coins.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { useCallback } from 'react';
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
    const { is_xsmall_screen, is_small_screen, is_medium_screen, is_large_screen } = useScreen();

    const getNumberOfSlides = useCallback(() => {
        if (is_xsmall_screen) return 2;
        if (is_small_screen) return 3;
        if (is_medium_screen) return 4;
        if (is_large_screen) return 5;
        return 6;
    }, [is_large_screen, is_medium_screen, is_small_screen, is_xsmall_screen]);

    return (
        <section className='flex-center mx-auto min-h-[245px] max-w-screen-xl bg-background px-2 py-6 sm:px-10'>
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

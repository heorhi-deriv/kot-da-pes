'use client';

import Image from 'next/image';
import Carousel from 'nuka-carousel';
import Coins from '@/public/assets/kot-da-pes-coins.png';
import { useWindowSize } from '@/hooks/useWindowSize';
import { ChevronRight, ChevronLeft } from 'lucide-react';
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
        <ChevronLeft size={60} strokeWidth={2} color='#64748b' onClick={nextSlideHandler} className='arrow' />
    ) : (
        <ChevronRight size={60} strokeWidth={2} color='#64748b' onClick={nextSlideHandler} className='arrow' />
    );
};

const AdvertisementCarousel = () => {
    const { isSmallScreen, isMediumScreen } = useWindowSize();

    const getNumberofSlides = () => {
        if (isSmallScreen) return 3;
        if (isMediumScreen) return 4;
        return 6;
    };

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
                slidesToShow={getNumberofSlides()}
                cellSpacing={10}
                withoutControls={isSmallScreen}
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

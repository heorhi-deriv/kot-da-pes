/* eslint-disable react/jsx-key */
'use client';

import Coins from '@/public/assets/kot-da-pes-coins.png';
import { useScreen } from '@/hooks/useScreen';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React from 'react';
import { NextButton, PrevButton, usePrevNextButtons } from './advertisement-carousel-buttons';
import './advertisement-carousel.css';

const carousel_array = [
    <Image src={Coins} alt='coins' height={220} />,
    <Image src={Coins} alt='coins' height={220} />,
    <Image src={Coins} alt='coins' height={220} />,
    <Image src={Coins} alt='coins' height={220} />,
    <Image src={Coins} alt='coins' height={220} />,
    <Image src={Coins} alt='coins' height={220} />,
    <Image src={Coins} alt='coins' height={220} />,
    <Image src={Coins} alt='coins' height={220} />,
    <Image src={Coins} alt='coins' height={220} />,
];

const AdvertisementCarousel = () => {
    const { is_medium_screen } = useScreen();

    const [embla_ref, embla_api] = useEmblaCarousel({ skipSnaps: true, align: 'start' });

    const { prev_btn_disabled, next_btn_disabled, onPrevButtonClick, onNextButtonClick } =
        usePrevNextButtons(embla_api);

    return (
        <section className='mx-auto flex max-w-screen-xl bg-background px-2 py-6 sm:px-10'>
            {is_medium_screen && <PrevButton onClick={onPrevButtonClick} disabled={prev_btn_disabled} />}
            <div className='embla overflow-hidden' ref={embla_ref}>
                <div className='embla__container flex'>
                    {carousel_array.map((el, i) => {
                        return (
                            <div key={i} className='embla__slide flex-center'>
                                {el}
                            </div>
                        );
                    })}
                </div>
            </div>
            {is_medium_screen && <NextButton onClick={onNextButtonClick} disabled={next_btn_disabled} />}
        </section>
    );
};

export default AdvertisementCarousel;

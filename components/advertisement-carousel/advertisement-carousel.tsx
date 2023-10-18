/* eslint-disable react/jsx-key */
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Coins from '@/public/assets/kot-da-pes-coins.png';
import { NextButton, PrevButton, usePrevNextButtons } from './advertisement-carousel-buttons';
import './advertisement-carousel.css';

const carousel_array = [
    <Image alt='coins' height={220} src={Coins} />,
    <Image alt='coins' height={220} src={Coins} />,
    <Image alt='coins' height={220} src={Coins} />,
    <Image alt='coins' height={220} src={Coins} />,
    <Image alt='coins' height={220} src={Coins} />,
    <Image alt='coins' height={220} src={Coins} />,
    <Image alt='coins' height={220} src={Coins} />,
    <Image alt='coins' height={220} src={Coins} />,
    <Image alt='coins' height={220} src={Coins} />,
];

const AdvertisementCarousel = () => {
    const [embla_ref, embla_api] = useEmblaCarousel({ align: 'start', skipSnaps: true });

    const { next_btn_disabled, onNextButtonClick, onPrevButtonClick, prev_btn_disabled } =
        usePrevNextButtons(embla_api);

    return (
        <section className='mx-auto flex max-w-screen-xl bg-background px-2 py-6 sm:px-10'>
            <PrevButton disabled={prev_btn_disabled} onClick={onPrevButtonClick} />
            <div className='embla overflow-hidden' ref={embla_ref}>
                <div className='embla__container flex'>
                    {carousel_array.map((el, i) => {
                        return (
                            <div className='embla__slide flex-center' key={i}>
                                {el}
                            </div>
                        );
                    })}
                </div>
            </div>
            <NextButton disabled={next_btn_disabled} onClick={onNextButtonClick} />
        </section>
    );
};

export default AdvertisementCarousel;

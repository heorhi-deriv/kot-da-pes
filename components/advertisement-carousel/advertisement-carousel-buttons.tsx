import React, { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type TUsePrevNextButtonsType = {
    next_btn_disabled: boolean;
    onNextButtonClick: () => void;
    onPrevButtonClick: () => void;
    prev_btn_disabled: boolean;
};

export const usePrevNextButtons = (embla_api?: EmblaCarouselType): TUsePrevNextButtonsType => {
    const [prev_btn_disabled, setPrevBtnDisabled] = useState(true);
    const [next_btn_disabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!embla_api) return;
        embla_api.scrollPrev();
    }, [embla_api]);

    const onNextButtonClick = useCallback(() => {
        if (!embla_api) return;
        embla_api.scrollNext();
    }, [embla_api]);

    const onSelect = useCallback((embla_api: EmblaCarouselType) => {
        setPrevBtnDisabled(!embla_api.canScrollPrev());
        setNextBtnDisabled(!embla_api.canScrollNext());
    }, []);

    useEffect(() => {
        if (!embla_api) return;

        onSelect(embla_api);
        embla_api.on('reInit', onSelect);
        embla_api.on('select', onSelect);
    }, [embla_api, onSelect]);

    return {
        next_btn_disabled,
        onNextButtonClick,
        onPrevButtonClick,
        prev_btn_disabled,
    };
};

type TButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const PrevButton: React.FC<TButtonProps> = props => {
    const { disabled, ...restProps } = props;

    return (
        <button type='button' {...restProps} className='max-md:hidden'>
            <ChevronLeft
                className='transform stroke-primary duration-300 hover:scale-125 hover:cursor-pointer'
                opacity={disabled ? '0.5' : '1'}
                size={60}
                strokeWidth={2}
            />
        </button>
    );
};

export const NextButton: React.FC<TButtonProps> = props => {
    const { children, disabled, ...restProps } = props;

    return (
        <button type='button' {...restProps} className='max-md:hidden'>
            <ChevronRight
                className='transform stroke-primary duration-300 hover:scale-125 hover:cursor-pointer'
                opacity={disabled ? '0.5' : '1'}
                size={60}
                strokeWidth={2}
            />
        </button>
    );
};

import { EmblaCarouselType } from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

type TUsePrevNextButtonsType = {
    prev_btn_disabled: boolean;
    next_btn_disabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
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
        prev_btn_disabled,
        next_btn_disabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

type TButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const PrevButton: React.FC<TButtonProps> = props => {
    const { disabled, ...restProps } = props;

    return (
        <button type='button' {...restProps}>
            <ChevronLeft
                className='transform stroke-primary duration-300 hover:scale-125 hover:cursor-pointer'
                size={60}
                opacity={disabled ? '0.5' : '1'}
                strokeWidth={2}
            />
        </button>
    );
};

export const NextButton: React.FC<TButtonProps> = props => {
    const { children, disabled, ...restProps } = props;

    return (
        <button type='button' {...restProps}>
            <ChevronRight
                className='transform stroke-primary duration-300 hover:scale-125 hover:cursor-pointer'
                size={60}
                opacity={disabled ? '0.5' : '1'}
                strokeWidth={2}
            />
        </button>
    );
};

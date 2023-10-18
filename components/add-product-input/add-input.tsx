'use client';

import { useEffect, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

type TNativeInputProps = React.ComponentProps<'input'>;

type TAddInputProps = {
    initial_value?: number;
    max_limit_input_number?: number;
    onChangeHandler: (value: number) => void;
} & TNativeInputProps;

const AddInput = ({ initial_value, max_limit_input_number, onChangeHandler }: TAddInputProps) => {
    const [value, setValue] = useState(initial_value || 0);

    useEffect(() => {
        onChangeHandler?.(value);
    }, [onChangeHandler, value]);

    const onClickPlusButtonHandler = () => {
        setValue(prev => prev + 1);
    };

    const onClickMinusButtonHandler = () => {
        setValue(prev => prev - 1);
    };

    const button_class_name = 'bg-transparent px-0 py-1 hover:bg-transparent';

    const onCahngeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (/^[0-9]{0,3}$/.test(value)) {
            setValue(Number(value));
        }
    };

    return (
        <div className='flex'>
            <Button
                className={button_class_name}
                disabled={value === 1 || value === 0}
                onClick={onClickMinusButtonHandler}
            >
                <Minus className='h-6 w-6 stroke-primary' />
            </Button>
            <Input
                className='h-[35px] w-10 p-1 text-center outline-none'
                max={999}
                onChange={onCahngeInputHandler}
                type='text'
                value={value}
            />
            <Button
                className={button_class_name}
                disabled={value === max_limit_input_number}
                onClick={onClickPlusButtonHandler}
            >
                <Plus className='h-6 w-6 stroke-primary' />
            </Button>
        </div>
    );
};

export default AddInput;

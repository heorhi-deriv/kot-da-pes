'use client';

import { useCallback, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import AddInput from '../add-product-input/add-input';
import { useCart } from '../cart-provider/cart-provider';

type TProductType = {
    description: string;
    discount: number;
    image: string;
    name: string;
    price: number;
};

const ProductCard = ({ description, discount, image, name, price }: TProductType) => {
    const { setProduct } = useCart();
    const [amount, setAmount] = useState<number | null>(null);

    const onChangeHandler = useCallback((value: number) => {
        setAmount(value);
    }, []);

    const onCartClickHandler = () =>
        setProduct({
            description,
            discount,
            image,
            name,
            price,
        });

    return (
        <div className='flex flex-col justify-between gap-6 rounded-xl bg-white p-2.5 pb-4 shadow-[0_0_4px_0_rgba(214,204,194)] md:gap-10'>
            <div className='flex flex-col gap-4'>
                <div className='m-auto flex h-[80px] w-[100px] sm:h-[150px] md:w-[150px]'>
                    <Image alt='product' height={150} src={image} width={150} />
                </div>
                <p className='text-sm md:text-base'>{name}</p>
                <p className='text-xs md:text-sm'>{description}</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <p className='text-xs md:text-sm'>{`${price} руб.`}</p>
                    {discount && <p className='text-xs line-through md:text-sm'>{`${discount} руб.`}</p>}
                </div>
                <div className='flex justify-between '>
                    <AddInput initial_value={1} max_limit_input_number={999} onChangeHandler={onChangeHandler} />
                    <ShoppingCart
                        className='mr-3 transform stroke-primary duration-300 hover:scale-125 hover:cursor-pointer'
                        onClick={onCartClickHandler}
                        size={38}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

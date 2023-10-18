'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import type { TProductType } from '@/types';

type TCartContextType = {
    products: TProductType[];
    setProduct: (product: TProductType) => void;
};

const CartContext = createContext<TCartContextType | null>(null);

export const useCart = () => {
    const cart_context = useContext(CartContext);

    if (!cart_context) {
        throw new Error('Oops, No context. Seems like you forgot to wrap your app in provider');
    }

    return cart_context;
};

export const CartProvider = ({ children }: React.PropsWithChildren) => {
    const [products, setProducts] = useState<TProductType[]>([]);

    const setProduct = useCallback((product: TProductType) => {
        setProducts(prev => [...prev, product]);
    }, []);

    return <CartContext.Provider value={{ products, setProduct }}>{children}</CartContext.Provider>;
};

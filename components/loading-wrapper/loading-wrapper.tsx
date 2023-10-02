'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { Loader } from '../ui/loader';
import { IS_BROWSER } from '@/config/constants';

const LoadingWrapper = ({ children }: PropsWithChildren) => {
    const [is_loading, setIsLoading] = useState(true);

    useEffect(() => {
        if (IS_BROWSER) setIsLoading(false);
    }, [is_loading]);

    if (is_loading) return <Loader full_screen />;

    return <>{children}</>;
};

export default LoadingWrapper;

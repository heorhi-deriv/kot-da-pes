'use client';

import React, { useState } from 'react';
import { initializeMocks } from './initialize';
import { IS_DEVELOPMENT } from '@/config/constants';
import { Loader } from '@/components/ui/loader';

const MSWWrapper = ({ children }: React.PropsWithChildren) => {
    const [is_msw_ready, setIsMSWReady] = useState(false);

    React.useEffect(() => {
        if (IS_DEVELOPMENT && process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
            initializeMocks().then(() => setIsMSWReady(true));
        }
    }, []);

    if (IS_DEVELOPMENT && !is_msw_ready) return <Loader full_screen />;

    return <>{children}</>;
};

export default MSWWrapper;

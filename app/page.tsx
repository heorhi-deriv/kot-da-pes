'use client';

import { useEffect, useState } from 'react';
import { Loader } from '@/components/ui/loader';
import BannerSection from '@/components/banner-section/banner-section';
import AdvertisementCarousel from '@/components/advertisement-carousel/advertisement-carousel';

export default function Home() {
    const [is_loading, setIsLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== undefined) setIsLoading(false);
    }, []);

    return is_loading ? (
        <Loader full_screen />
    ) : (
        <main className='mx-auto'>
            <AdvertisementCarousel />
            <BannerSection />
        </main>
    );
}

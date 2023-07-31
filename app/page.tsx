import dynamic from 'next/dynamic';
import BannerSection from '@/components/banner-section/banner-section';
import { Loader } from '@/components/ui/loader';

const AdvertisementCarousel = dynamic(() => import('@/components/advertisement-carousel/advertisement-carousel'), {
    loading: () => <Loader className='min-h-[245px]' />,
    ssr: false,
});

export default function Home() {
    return (
        <main className='mx-auto'>
            <AdvertisementCarousel />
            <BannerSection />
        </main>
    );
}

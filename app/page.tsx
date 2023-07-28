import BannerSection from '@/components/banner-section/banner-section';
import AdvertisementCarousel from '@/components/advertisement-carousel/advertisement-carousel';

export default function Home() {
    return (
        <main className='mx-auto'>
            <AdvertisementCarousel />
            <BannerSection />
        </main>
    );
}

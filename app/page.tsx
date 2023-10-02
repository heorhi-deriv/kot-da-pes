import AdvertisementCarousel from '@/components/advertisement-carousel/advertisement-carousel';
import BannerSection from '@/components/banner-section/banner-section';

export default function Home() {
    return (
        <main className='mx-auto'>
            <AdvertisementCarousel />
            <BannerSection />
        </main>
    );
}

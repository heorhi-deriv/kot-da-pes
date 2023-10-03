import AdvertisementCarousel from '@/components/advertisement-carousel/advertisement-carousel';
import BannerSection from '@/components/banner-section/banner-section';
import ProductSection from '@/components/product-section/product-section';

export default function Home() {
    return (
        <main className='mx-auto'>
            <AdvertisementCarousel />
            <BannerSection />
            <ProductSection />
        </main>
    );
}

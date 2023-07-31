import Image from 'next/image';
import CatDog from '@/public/assets/cat_with_dog.png';

const BannerSection = () => {
    return (
        <section className='bg-foreground'>
            <div
                className='
        flex-center max-w-screen-xl mx-auto flex-col gap-y-5 p-3  
        sm:flex-row
        sm:gap-x-8 sm:py-4 
        lg:justify-evenly lg:px-6
        '
            >
                <div className='px-4 sm:px-0 sm:max-lg:basis-3/5'>
                    <Image src={CatDog} alt='cat_with_dog' width={500} height={250} />
                </div>
                <div
                    className='
        flex flex-col text-center font-amatic text-2xl font-semibold text-primary 
        sm:text-left sm:text-3xl sm:max-lg:basis-1/2 
        lg:text-5xl
        '
                >
                    <p>Ваши питомцы любят МЯСО</p>
                    <ul className='my-2 list-inside list-disc pl-6 text-xl font-normal'>
                        <li>Натуральный состав</li>
                        <li>Удобная упаковка</li>
                    </ul>
                    <p>Заботьтесь о своих питомцах с нами</p>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;

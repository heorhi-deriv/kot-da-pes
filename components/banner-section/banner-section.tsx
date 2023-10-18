import Image from 'next/image';
import CatDog from '@/public/assets/cat_with_dog.png';

const BannerSection = () => {
    return (
        <section className='bg-foreground'>
            <div
                className='
        flex-center mx-auto max-w-screen-xl flex-col gap-y-5 p-3  
        sm:flex-row
        sm:gap-x-8 sm:py-4 
        lg:justify-evenly lg:px-6
        '
            >
                <div className='px-4 sm:px-0 sm:max-lg:basis-3/5'>
                    <Image alt='cat_with_dog' height={250} src={CatDog} width={500} />
                </div>
                <div
                    className='
        flex flex-col whitespace-nowrap text-center font-amatic text-clamp-heading font-semibold text-primary
        sm:text-left sm:max-lg:basis-1/2 
        '
                >
                    <p>Ваши питомцы любят МЯСО</p>
                    <ul className='my-2 list-inside list-disc pl-6 text-clamp-paragraph font-normal'>
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

import Image from 'next/image';

type TProductType = {
    image: string;
    name: string;
    description: string;
    price: number;
};

const ProductCard = ({ image, name, description, price }: TProductType) => {
    return (
        <div className='text-red-500'>
            <Image src={image} alt='product' width={150} height={120} />
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default ProductCard;

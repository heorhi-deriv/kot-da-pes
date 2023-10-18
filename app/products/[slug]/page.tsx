import Image from 'next/image';

type TPageProps = {
    params: {
        slug: string;
    };
};

export default async function Page({ params }: TPageProps) {
    const { slug } = params;

    const product = await fetch(`http://localhost:1337/api/products/${slug}`, {
        next: {
            revalidate: 0,
        },
    }).then(res => res.json());

    if (product?.error?.status === 404) {
        return null;
    }

    return (
        <div>
            <h1 className='text-red-700'>{product.name}</h1>
            <h1 className='text-red-700'>{product.description}</h1>
            <Image alt='products' height={100} src={product.image.formats.thumbnail.url} width={100} />
        </div>
    );
}

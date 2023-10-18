import ProductCard from '../product-card/product-card';

const getCategoryName = (category_name: string) => {
    switch (category_name) {
        case 'ready_made_food':
            return 'Готовый корм';
        default:
            return '';
    }
};

const id_mapper = {
    ready_made_food: 'gotovi_korm',
};

const ProductSection = async () => {
    const response = await fetch('http://localhost:1337/api/products?populate=*', {
        next: {
            revalidate: 0,
        },
    });
    const { data: products } = await response.json();

    const modified_products = products.reduce(
        //@ts-expect-error
        (acc, el) => {
            switch (el.attributes.category) {
                case 'ready_made_food': {
                    acc[el.attributes.category].push(el.attributes);
                    return acc;
                }
                default:
                    return acc;
            }
        },
        { ready_made_food: [] }
    );

    return (
        <section>
            {Object.keys(modified_products).map(category_name => {
                return (
                    <div className='mx-auto max-w-screen-xl px-2' key={category_name}>
                        <div
                            className='my-6 text-center text-clamp-paragraph font-semibold md:my-8 md:text-start'
                            //@ts-expect-error fix error
                            id={id_mapper[category_name]}
                        >
                            {getCategoryName(category_name)}
                        </div>
                        <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
                            {modified_products[category_name].map(
                                //@ts-expect-error
                                product => {
                                    return (
                                        <ProductCard
                                            description={product.description}
                                            discount={product.discount}
                                            image={product.image.data.attributes.formats.thumbnail.url}
                                            key={product.name}
                                            name={product.name}
                                            price={product.price}
                                        />
                                    );
                                }
                            )}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default ProductSection;

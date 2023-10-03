import ProductCard from '../product-card/product-card';

const getCategoryName = (category_name: string) => {
    switch (category_name) {
        case 'ready_made_food':
            return 'Готовый корм';
        default:
            return '';
    }
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
        <div>
            {Object.keys(modified_products).map(category_name => {
                return (
                    <div key={category_name}>
                        <div className='text-red-500'>{getCategoryName(category_name)}</div>
                        <div>
                            {modified_products[category_name].map(
                                //@ts-expect-error
                                product => {
                                    return (
                                        <ProductCard
                                            key={product.name}
                                            image={product.image.data.attributes.formats.thumbnail.url}
                                            name={product.name}
                                            description={product.description}
                                            price={product.price}
                                        />
                                    );
                                }
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductSection;

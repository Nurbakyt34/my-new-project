import React from 'react';
import { useNavigate } from 'react-router';
import { useProducts } from '../../page/context/ProductContext';

function AllProduct() {
    const navigate = useNavigate();
    const { products } = useProducts(); // <-- берём актуальные товары из контекста

    const handleClick = (productTitle) => {
        const slug = encodeURIComponent(productTitle.toLowerCase().replace(/\s+/g, '-'));
        navigate(`/category/${slug}`);
    };

    return (
        <div className="app-container w-full">
            <h2 className="text-5xl text-center mt-[120px] mb-[50px] font-bold">
                Оживите свое жилое пространство
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {products.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => handleClick(product.title)}
                        className="cursor-pointer bg-white border border-gray-300 rounded-2xl p-4 flex flex-col items-center hover:shadow-md transition"
                    >
                        <div className="w-full flex items-center justify-center mb-[10px]">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-[150px] object-contain"
                            />
                        </div>
                        <h3 className="text-[20px] text-center text-gray-900">
                            {product.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProduct;

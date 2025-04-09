import React, { useState } from 'react';
import { useParams } from 'react-router'; 

const ProductDetails = () => {
    const { id } = useParams(); 

    const product = {
        1: {
            name: "Столовый гарнитур Havana",
            images: [
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F520%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58hvn8015qsze-2.jpg&w=1920&q=100",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F520%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58hvn8015qsze-2.jpg&w=1920&q=100",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F42%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57rbypb00000000-21.jpg&w=1920&q=100"
            ],
            description: "Обзор стола, описание материалов и дизайнерские особенности.",
        },
        2: {
            name: "Комплект мягкой мебели Ruby",
            images: [
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F42%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57rbypb00000000-21.jpg&w=1920&q=100",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F42%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57rbypb00000000-21.jpg&w=1920&q=100"
            ],
            description: "Описание мягкой мебели, материалы, стилистика и рекомендации.",
        },
        // Добавьте другие товары с их изображениями
    };

    const currentProduct = product[id];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className='app-container mt-[50px]'>
            
            <h2 className="text-4xl text-center mt-[20px] mb-[50px] font-bold">{currentProduct?.name}</h2>

            <div className="product-detail mt-[60px]">
                <div className="main-image">
                    <img
                        src={currentProduct?.images[currentImageIndex]}
                        alt={currentProduct?.name}
                        className="h-[300px] w-[400px] rounded object-cover mx-auto"
                    />
                </div>
                <div className="image-gallery mt-4 flex justify-center gap-4">
                    {currentProduct?.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`product-${index}`}
                            className="w-20 h-20 object-cover rounded cursor-pointer"
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
                <p className="mt-4 text-center">{currentProduct?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;

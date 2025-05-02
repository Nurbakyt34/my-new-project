import React, { useState } from 'react';
import { useParams } from 'react-router';
import { ChevronUp, ChevronDown, Ruler, Palette } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const ProductDetails = () => {
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [thumbStartIndex, setThumbStartIndex] = useState(0);
    const thumbnailsToShow = 3;

    const product = {
        1: {
            name: "Столовый гарнитур Havana",
            images: [
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F520%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58hvn8015qsze-5.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F520%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58hvn8015qsze-6.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F520%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58hvn8015qsze-7.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F520%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58hvn8015qsze-8.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F520%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58hvn8015qsze-9.jpg&w=1920&q=75"
            ],
            description: "Консоль+Консольное зеркало+Раздвижной обеденный стол+6 стульев",
            specs: {
                width: "180 см",
                height: "75 см",
                colors: ["Бежевый", "Коричневый"]
            }
        },
        2: {
            name: "Комплект мягкой мебели Ruby",
            images: [
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F42%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57rbypb00000000-21.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F42%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57rbypb00000000-22.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F42%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57rbypb00000000-24.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F42%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57rbypb00000000-25.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F42%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57rbypb00000000-26.jpg&w=1920&q=75"
            ],
            description: "1 трехместный диван + 1 кресло",
            specs: {
                width: "240 см",
                height: "85 см",
                colors: ["Серый", "Синий"]
            }
        },
        3: {
            name: "Комплект мягкой мебели Cozy S",
            images: [
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F35%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57czspb00000000-15.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F35%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57czspb00000000-16.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F35%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57czspb00000000-17.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F35%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57czspb00000000-18.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F35%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57czspb00000000-19.jpg&w=1920&q=75"
            ],
            description: "1 трехместный диван + 1 кресло",
            specs: {
                width: "220 см",
                height: "90 см",
                colors: ["Бежевый", "Коричневый"]
            }
        },
        4: {
            name: "Спальный гарнитур Napoli",
            images: [
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F670%2F1-napoli-yatak-odasi-00.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F670%2F2-napoli-yatak-odasi-01_min.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F670%2F6-napoli-yatak-odasi-05_min.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F670%2F7-napoli-yatak-odasi-06_min.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F670%2F8-napoli-yatak-odasi-08_min.jpg&w=1920&q=75"
            ],
            description: "5-дверный шкаф + Макияжный стол + Макияжное зеркало + 160 см Изголовье кровати + 2 Прикроватные тумбочки",
            specs: {
                width: "160 см",
                height: "200 см",
                colors: ["Белый", "Золотой"]
            }
        },
        5: {
            name: "Комплект мягкой мебели Flexy",
            images: [
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F781%2F1-flexy-koltuk-takimlari-03_min.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F781%2F2-flexy-koltuk-takimlari-00_min.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F781%2F6-flexy-koltuk-takimlari-17_min.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F781%2F7-flexy-koltuk-takimlari-47_min.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F781%2F1-flexy-koltuk-takimlari-03_min.jpg&w=1920&q=75"
            ],
            description: "1 трехместный диван + 1 кресло",
            specs: {
                width: "230 см",
                height: "85 см",
                colors: ["Серый", "Бежевый"]
            }
        },
        6: {
            name: "Матрас Kolajen Linen",
            images: [
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1008%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-27kjn00901900400-9.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1008%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-27kjn00901900400-11.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1008%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-27kjn00901900400-12.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1008%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-27kjn00901900400-13.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1008%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-27kjn00901900400-15.jpg&w=1920&q=75"
            ],
            description: "хороший товар 👌",
            specs: {
                width: "160 см",
                height: "200 см",
                colors: ["Белый"]
            }
        },
        7: {
            name: "Столовый гарнитур Montego",
            images: [
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F533%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F533%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-31.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F533%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-32.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F533%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-33.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F533%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-35.jpg&w=1920&q=75"
            ],
            description: "Консоль+Консольное зеркало+Раздвижной обеденный стол+6 стульев",
            specs: {
                width: "180 см",
                height: "75 см",
                colors: ["Коричневый", "Бежевый"]
            }
        },
        8: {
            name: "Угловой диван Rolden",
            images: [
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F45%2F1-1-rolden-kose-tk-08.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F45%2F3-1-rolden-kose-tk-00.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F45%2F5-1-rolden-kose-tk-04.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F45%2F2-rolden-kose-tk-082.jpg&w=1920&q=75",
                "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F45%2F4-1-rolden-kose-tk-002.jpg&w=1920&q=75"
            ],
            description: "1 угловой диван",
            specs: {
                width: "280 см",
                height: "85 см",
                colors: ["Серый", "Бежевый"]
            }
        },
    };

    const currentProduct = product[id];

    const handlePrevImage = () => {
        const newIndex = currentImageIndex - 1;
        if (newIndex >= 0) {
            setCurrentImageIndex(newIndex);
            if (newIndex < thumbStartIndex) {
                setThumbStartIndex(newIndex);
            }
        }
    };

    const handleNextImage = () => {
        const newIndex = currentImageIndex + 1;
        if (newIndex < currentProduct.images.length) {
            setCurrentImageIndex(newIndex);
            if (newIndex >= thumbStartIndex + thumbnailsToShow) {
                setThumbStartIndex(newIndex - thumbnailsToShow + 1);
            }
        }
    };

    return (
        <div className='app-container h-[800px] p-12 mt-[130px]'>
            <Breadcrumbs />
            <div className='fle'>
                <div className="flex flex-col lg:flex-row gap-8 mt-[20px] mb-[130px]">
                    {/* Левая панель — миниатюры + стрелки */}
                    <div className="flex flex-col items-center">
                        <button
                            className="mb-2 p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                            onClick={handlePrevImage}
                            disabled={currentImageIndex === 0}
                        >
                            <ChevronUp size={24} />
                        </button>

                        <div className="flex flex-col gap-3">
                            {currentProduct.images
                                .slice(thumbStartIndex, thumbStartIndex + thumbnailsToShow)
                                .map((image, index) => {
                                    const realIndex = thumbStartIndex + index;
                                    return (
                                        <img
                                            key={realIndex}
                                            src={image}
                                            alt={`thumb-${realIndex}`}
                                            onClick={() => setCurrentImageIndex(realIndex)}
                                            className={`w-[130px] h-[150px] object-cover rounded-2xl cursor-pointer border-1 ${currentImageIndex === realIndex
                                                ? 'border-blue-500'
                                                : 'border-transparent'
                                                }`}
                                        />
                                    );
                                })}
                        </div>

                        <button
                            className="mt-2 p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                            onClick={handleNextImage}
                            disabled={currentImageIndex === currentProduct.images.length - 1}
                        >
                            <ChevronDown size={24} />
                        </button>
                    </div>

                    {/* Правая панель — главное изображение и описание */}
                    <div className="flex-1 flex flex-col items-center lg:items-start">
                        <img
                            src={currentProduct?.images[currentImageIndex]}
                            alt={currentProduct?.name}
                            className="w-full max-w-[500px] mb-[300px] h-[470px] mt-[42px] rounded-2xl object-cover"
                        />
                    </div>
                </div>

                <div className='mt-[-890px]'>
                    <h2 className="text-3xl mt-[px] ml-[700px] mb-8 font-bold">{currentProduct?.name}</h2>
                    
                    {/* Характеристики */}
                    <div className="ml-[700px] mb-6 p-4 bg-gray-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Характеристики</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Ruler className="text-teal-700" size={20} />
                                <span className="text-gray-600">Ширина:</span>
                                <span className="font-medium">{currentProduct?.specs.width}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Ruler className="text-teal-700 rotate-90" size={20} />
                                <span className="text-gray-600">Высота:</span>
                                <span className="font-medium">{currentProduct?.specs.height}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Palette className="text-teal-700" size={20} />
                                <span className="text-gray-600">Доступные цвета:</span>
                                <div className="flex gap-2">
                                    {currentProduct?.specs.colors.map((color, index) => (
                                        <span key={index} className="px-2 py-1 bg-white rounded-full text-sm border border-gray-200">
                                            {color}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-[gray] ml-[700px]'>Содержание комплекта:</p>
                    <p className="mt-[px] mr-[50] pl-[700px]">{currentProduct?.description}</p>

                    <div className='flex gap-5 ml-[702px] mt-6'>
                        <button className="w-[200px] h-[40px] bg-teal-700 text-white rounded-full px-3 py-1 text-sm border border-transparent 
                            hover:bg-white hover:text-teal-700 hover:border-teal-700 transition-all duration-300">
                            Заказать Звонок
                        </button>

                        <button className="w-[200px] h-[40px] bg-teal-700 text-white rounded-full px-3 py-1 text-sm border border-transparent 
                            hover:bg-white hover:text-teal-700 hover:border-teal-700 transition-all duration-300">
                            Написать в WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
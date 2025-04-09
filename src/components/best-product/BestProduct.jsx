import React from 'react';
import { useNavigate } from 'react-router'; // Импортируем useNavigate для навигации
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BestProduct = () => {
    const navigate = useNavigate(); // Создаем функцию для навигации

    const products = [
        {
            id: 1,
            image: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F520%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58hvn8015qsze-2.jpg&w=1920&q=100",
            name: "Столовый гарнитур Havana",
        },
        {
            id: 2,
            image: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F42%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57rbypb00000000-21.jpg&w=1920&q=100",
            name: "Комплект мягкой мебели Ruby",
        },
        {
            id: 3,
            image: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F35%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57czspb00000000-15.jpg&w=1920&q=100",
            name: "Комплект мягкой мебели Cozy S",
        },
        {
            id: 4,
            image: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F670%2F1-napoli-yatak-odasi-00.jpg&w=1920&q=100",
            name: "Спальный гарнитур Napoli",
        },
        {
            id: 5,
            image: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F781%2F1-flexy-koltuk-takimlari-03.jpg&w=1920&q=100",
            name: "Комплект мягкой мебели Flexy",
        },
        {
            id: 6,
            image: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1008%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-27kjn00901900400-9.jpg&w=1920&q=100",
            name: "Матрас Kolajen Linen",
        },
        {
            id: 7,
            image: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F533%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg&w=1920&q=100",
            name: "Столовый гарнитур Montego",
        },
        {
            id: 8,
            image: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F45%2Fthumbs%2F1-1-rolden-kose-tk-08.jpg&w=1920&q=100",
            name: "Угловой диван Rolden",
        },
    ];

    const handleProductClick = (id) => {
        // Перенаправляем на страницу с детальным обзором товара
        navigate(`/product/${id}`);
    };

    return (
        <div className='app-container mt-[50px]'>
            <h2 className="text-5xl text-center mt-[120px] mb-[50px] font-bold ">Популярные товары</h2>

            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                loop={false}
                navigation={true}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {products.map((item) => (
                    <SwiperSlide key={item.id} onClick={() => handleProductClick(item.id)}>
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[170px] rounded-xl object-cover cursor-pointer" // Добавляем cursor-pointer
                        />
                        <div className="p-2">
                            <h3 className="text-lg text-center">{item.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BestProduct;

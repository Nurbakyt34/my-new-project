import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Подключение стилей Swiper

import { Autoplay } from 'swiper/modules'; // Импортирование модуля Autoplay

const Main = () => {
    const slidesData = [
        'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57hvnpa00000000-2.jpg&w=1920&q=100',
        'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F765%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58pnd8005fsr2-2.jpg&w=1920&q=100',
        'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F2%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57pndpa00000000-2.jpg&w=1920&q=100',
    ];

    return (
        <Swiper
            className='app-container '
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]} // Убедитесь, что модуль Autoplay подключен
        >
            {slidesData.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[500px] mt-[199px] object-cover rounded-xl"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Main;

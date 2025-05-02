import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import main1 from '../../assets/main1.jpg'
import main2 from '../../assets/main2.jpg'
import main3 from '../../assets/main3.jpg'
import main4 from '../../assets/main4.jpg'
import main5 from '../../assets/main5.jpg'

const Main = () => {
    const slidesData = [main1, main2, main3, main4, main5];

    return (
        <Swiper
            className="app-container"
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            {slidesData.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[550px] mt-[209px] object-fill rounded-xl"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Main;
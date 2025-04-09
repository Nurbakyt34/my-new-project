import React from 'react';
import { TbCalendarTime, TbCarFilled } from "react-icons/tb";
import { PiCertificateBold } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const BestRewi = () => {
    const items = [
        {
            icon: <TbCalendarTime size={30} />,
            text: '1 год гарантии',
        },
        {
            icon: <PiCertificateBold size={30} />,
            text: 'Оригинальная продукция',
        },
        {
            icon: <TbCarFilled size={30} />,
            text: 'Бесплатная доставка',
        },
        {
            icon: <FaBoxOpen size={30} />,
            text: 'Удобная упаковка',
        },
        {
            icon: <TbCarFilled size={30} />,
            text: 'Быстрая доставка',
        },
    ];

    return (
        <div className="app-container ">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                className='mt-[60px]'
                slidesPerView={3} // всегда 3 карточки
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#E0E3E9] p-6 rounded-2xl flex items-center gap-4 h-[100px] w-full">
                            <div className="text-teal-700">
                                {item.icon}
                            </div>
                            <span className="text-xl font-medium">{item.text}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BestRewi;

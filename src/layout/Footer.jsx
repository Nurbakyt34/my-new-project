import React from 'react';
import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { Link } from 'react-router';

function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/your-number', '_blank');
    };

    const handleTelegramClick = () => {
        window.open('https://t.me/your-username', '_blank');
    };

    const sections = [
        {
            title: 'ГОСТИНАЯ',
            links: [
                'Комплекты мягкой мебели',
                'Угловые диваны',
                'Диваны',
                'Диваны-слиперы',
                'Кресла',
                'ТВ кресла',
                'ТВ-тумбы',
                'Журнальные столики',
            ],
        },
        {
            title: 'СТОЛОВАЯ',
            links: [
                'Столовые гарнитуры',
                'Комплекты кухонных столов',
                'Столы',
                'Стулья',
                'Консоли',
                'Зеркала',
                'Витрины',
                'Пеналы',
            ],
        },
        {
            title: 'СПАЛЬНЯ',
            links: [
                'Спальные гарнитуры',
                'Гардероб и шкафы',
                'Кровати',
                'Прикроватные тумбочки',
                'Столики для макияжа',
                'Зеркала',
                'Комоды',
            ],
        },
        {
            title: 'КРОВАТИ И МАТРАСЫ',
            links: [
                'Матрасы',
                'Кровати',
                'Изголовья кроватей',
            ],
        },
        {
            title: 'ДЕТСКАЯ',
            links: [
                'Юношеские гарнитуры',
                'Гардеробы и шкафы',
                'Рабочие столы',
                'Книжные шкафы',
                'Прикроватные тумбочки',
                'Комоды',
                'Изголовья детских кроватей',
                'Двухъярусные кровати',
                'Детские гарнитуры',
                'Люльки, манежи',
                'Кресла для детской',
            ],
        },
        {
            title: 'ДЛЯ САДА',
            links: [
                'Мини комплекты',
                'Комплекты наружных столов',
                'Комплекты уголков',
                'Садовые качающиеся кресла',
                'Садовые столы',
                'Садовые журнальные столики',
                'Садовые кресла',
            ],
        },
        {
            title: 'КОМПЛЕКТУЮЩИЕ',
            links: [
                'Мебель для прихожей',
                'Тумбы под ТВ',
                'Журнальные столики',
                'Журнальные столики "ZIGON"',
                'Журнальные столики "YAN"',
                'Дресуары',
                'Маркизы',
                'Пуфики',
            ],
        },
    ];

    return (
        <footer className="app-container bg-white ">


            <hr className='border-gray-300 mt-[320px] mb-[35px]' />

            <div className='flex justify-between'>

                <Link to="/">
                    <div className="bg-teal-700 flex items-center justify-center text-center w-[190px] h-[35px] text-white text-[30px] font-bold text-2xl tracking-widest cursor-pointer">
                        BELLONA
                    </div>
                </Link>


                <div className="relative flex items-center gap-4">

                    <p>+996 777 80 51 54</p>

                    <button
                        className="bg-white text-teal-600 border-2  border-teal-600 h-[40px] px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-colors duration-200"
                        onClick={() => setIsOpen(!isOpen)}
                        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                    >
                        <span>написать в</span>
                        <FaWhatsapp />
                        <LiaTelegramPlane />
                    </button>

                    {isOpen && (
                        <div className="absolute top-full mt-2 w-64 bg-black rounded-lg shadow-lg overflow-hidden">
                            <button
                                className="w-full px-4 py-3 flex items-center space-x-3 text-white hover:bg-gray-800 transition-colors duration-200"
                                onClick={handleWhatsAppClick}
                            >
                                <FaWhatsapp />
                                <span>Написать в WhatsApp</span>
                            </button>
                            <button
                                className="w-full px-4 py-3 flex items-center space-x-3 text-white hover:bg-gray-800 transition-colors duration-200"
                                onClick={handleTelegramClick}
                            >
                                <LiaTelegramPlane />
                                <span>Написать в Telegram</span>
                            </button>
                        </div>

                    )}
                </div>

            </div>

            <hr className='border-gray-300 mt-[35px]' />



            <div className="container mx-auto px-4 mt-[30px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h2 className="text-teal-700 font-bold text-lg">{section.title}</h2>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-gray-700 hover:text-teal-700 transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;

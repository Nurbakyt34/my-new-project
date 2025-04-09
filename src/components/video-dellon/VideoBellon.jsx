
import NewLogo from '../../assets/new-logo.jpg';
import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { Link } from 'react-router';


function VideoBellon() {

    const [isOpen, setIsOpen] = useState(false);

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/your-number', '_blank');
    };

    const handleTelegramClick = () => {
        window.open('https://t.me/your-username', '_blank');
    };

    const showcaseItems = [
        {
            title: 'BELLONA',
            location: 'КАРЛИНО',
            image: 'https://bellonamebel.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-video1.001c2832.png&w=1080&q=75',
        },
        {
            title: 'BELLONA',
            location: 'АХУНБАЕВА',
            image: 'https://bellonamebel.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-video2.26c4bfc8.png&w=1080&q=75',
        },
        {
            title: 'BELLONA',
            location: 'PESARO',
            image: 'https://bellonamebel.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-video3.1601855b.png&w=1080&q=75',
        },
        {
            title: 'BELLONA',
            location: 'MONTEGO',
            image: 'https://bellonamebel.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-video4.3aa3f237.png&w=1080&q=75',
        },
    ];

    const videoLinks = [
        'https://youtu.be/FdhksCrEiTE',
        'https://youtu.be/KO5TNg6YCzw',
        'https://youtu.be/R83m63cjbHA',
        'https://youtu.be/CeGYYswpI9s',
    ];




    return (
        <div className="app-container py-12">
            <a
                href="https://www.youtube.com/@BELLONAMEBEL"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="flex items-center gap-6 mb-12 mt-[80px] bg-white hover:bg-gray-200 p-8 rounded-2xl transition-colors duration-300 cursor-pointer">
                    <img
                        src={NewLogo}
                        alt="Bellona Logo"
                        className="w-40 h-40 object-contain mr-[30px] rounded-full"
                    />
                    <div>
                        <h2 className="text-4xl font-bold mb-4">BELLONA MEBEL</h2>
                        <p className="text-xl text-gray-600">@BELLONAMEBEL</p>
                    </div>
                </div>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {showcaseItems.map((item, index) => (
                    <a
                        key={index}
                        href={videoLinks[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer block"
                    >
                        <div className="rounded-[10px] mb-4 border border-gray-300 overflow-hidden">
                            <img
                                src={item.image}
                                alt={`${item.title} ${item.location}`}
                                className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">
                                {item.title} - {item.location}

                            </h3>
                        </div>
                    </a>
                ))}
            </div>
            <hr className='border-gray-300 mt-[120px] mb-[40px]' />


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
        </div>
    );
}

export default VideoBellon;

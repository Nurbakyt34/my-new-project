import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const GostinPage = () => {
    const images = [
        {
            name: "Подставка под телевизор Вероника",
            url: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F323%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58ver80450dmz-2.jpg&w=1080&q=75"
        },
        {
            name: "ТВ-тумба Victor",
            url: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F428%2F1-victor-tv-unitesi-08.jpg&w=1080&q=75"
        },
        {
            name: "Подставка под телевизор «Наполи»",
            url: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F433%2F1-napoli-tv-unitesi-04.jpg&w=1080&q=75"
        },
        {
            name: "Кресло Veronica - кремовое",
            url: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F255%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20ver1a00400001-2.jpg&w=1080&q=75"
        },
        {
            name: "Кресло Flexy светло-серое",
            url: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F767%2F2-flexy-koltuk-takimlari-25.jpg&w=1080&q=75"
        },
        {
            name: "Кресло Flexy серое",
            url: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F769%2F2-flexy-koltuk-takimlari-50.jpg&w=1920&q=75"
        },
        {
            name: "Трехместный диван Veronica - кремовый",
            url: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F254%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20ver3d00400001-2.jpg&w=1080&q=75"
        },
        {
            name: "Трехместный диван Mathias - бордовый серый",
            url: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F339%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20mth3d00400003-2.jpg&w=1080&q=75"
        },
        {
            name: "Трехместный диван İndiana - черная ножка серый",
            url: "https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F488%2F1-indiana-koltuk-takimi-28.jpg&w=1080&q=75"
        },
        {
            name: "Фото 5",
            url: ""
        },
    ];

    return (
        <div className='app-container p-12'>
            <Breadcrumbs />
            <h2 className='mt-[20px] mb-[20px] text-4xl'>Гостиная</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <img
                            src={img.url}
                            alt={img.name}
                            className="w-[350px] h-[180px] object-cover rounded-2xl"
                        />
                        <span className="text-sm mt-2">{img.name}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default GostinPage;

import React from 'react';

function DizainBellon() {
  const categories = [
    {
      title: 'Комплекты мягкой мебели',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Fcategories%2Fkomplekty-myagkoy-mebeli.jpg&w=1080&q=100',
      link: '#',
    },
    {
      title: 'Угловые диваны',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Fcategories%2Fuglovye-divany.jpg&w=1080&q=100',
      link: '#',
    },
    {
      title: 'Столовые гарнитуры',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Fcategories%2Fstolovye-garnitury.jpg&w=1080&q=100',
      link: '#',
    },
    {
      title: 'Спальные гарнитуры',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Fcategories%2Fspalnye-garnitury.jpg&w=1080&q=100',
      link: '#',
    },
    {
      title: 'Матрасы',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Fcategories%2Fmatrasy.jpg&w=1080&q=100',
      link: '#',
    },
  ];

  return (
    <div className="app-container py-12">
      <h2 className="text-5xl font-bold text-center mt-[100px] mb-12">Культовый дизайн Bellona</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
        {categories.slice(0, 2).map((category, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative h-[350px] overflow-hidden rounded-lg mb-4">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-1xl text-center mb-2">{category.title}</h3>
            <a
              href={category.link}
              className="text-teal-700 text-center hover:text-teal-800 transition-colors mx-auto font-bold border border-teal-700 rounded-full px-6 py-1 hover:bg-teal-600 "
            >
              Посмотреть все
            </a>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {categories.slice(2).map((category, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative h-[210px] overflow-hidden rounded-lg mb-4">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-1xl text-center mb-2">{category.title}</h3>
            <a
              href={category.link}
              className="text-teal-700 text-center hover:text-teal-800 transition-colors mx-auto border border-teal-700 rounded-full px-6 py-2 hover:bg-teal-700 "
            >
              Посмотреть все
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DizainBellon;

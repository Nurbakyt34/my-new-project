import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router';
// import { Link } from 'react-router';  // Используем правильный импорт

function DizainBellon() {
  const categories = [
    {
      id:1,
      title: 'Комплекты мягкой мебели',
      slug: 'komplekty-myagkoy-mebeli', // Добавляем slug
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Fcategories%2Fkomplekty-myagkoy-mebeli.jpg&w=1080&q=100',
      link: '#',
    },
    {
      id:2,
      title: 'Угловые диваны',
      slug: 'uglovye-divany', // Добавляем slug
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Fcategories%2Fuglovye-divany.jpg&w=1080&q=100',
      link: '#',
    },
    {
      id:3,
      title: 'Столовые гарнитуры',
      slug: 'stolovye-garnitury', // Добавляем slug
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Fcategories%2Fstolovye-garnitury.jpg&w=1080&q=100',
      link: '#',
    },
    {
      id:4,
      title: 'Спальные гарнитуры',
      slug: 'spalnye-garnitury', // Добавляем slug
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Fcategories%2Fspalnye-garnitury.jpg&w=1080&q=100',
      link: '#',
    },
    {
      id:5,
      title: 'Матрасы',
      slug: 'matrasy', // Добавляем slug
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Fcategories%2Fmatrasy.jpg&w=1080&q=100',
      link: '#',
    },
  ];

  return (
    <div className="app-container py-12">
      <Breadcrumbs />

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
            <Link
              to={`/category/${category.slug}`} // Теперь slug правильно используется
              className="text-teal-700 text-center hover:text-teal-800 transition-colors mx-auto font-bold border border-teal-700 rounded-full px-6 py-1 hover:bg-teal-600"
            >
              Посмотреть все
            </Link>
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
            <Link
              to={`/category/${category.slug}`} // Теперь slug правильно используется
              className="text-teal-700 text-center hover:text-teal-800 transition-colors mx-auto font-bold border border-teal-700 rounded-full px-6 py-1 hover:bg-teal-600"
            >
              Посмотреть все
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DizainBellon;

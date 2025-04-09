import React from 'react';

function AllProduct() {
  const categories = [
    {
      title: 'Кровати и матрасы',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fmatras.webp&w=1920&q=100',
      link: '#',
    },
    {
      title: 'Угловые диваны',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fuglovoy-divan.webp&w=1920&q=100',
      link: '#',
    },
    {
      title: 'Диваны',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fdivan-kreslo.webp&w=1920&q=100',
      link: '#',
    },
    {
      title: 'Кресла',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fberjer.webp&w=1920&q=100',
      link: '#',
    },
    {
      title: 'ТВ-тумбы',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Ftv-tumba.webp&w=1920&q=100',
      link: '#',
    },
    {
      title: 'Столы',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fobedenniy-stol.webp&w=1920&q=100',
      link: '#',
    },
    {
      title: 'Стулья',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fstul.webp&w=1920&q=100',
      link: '#',
    },
    {
      title: 'Журнальные столики',
      image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fzhurnalniy-stolik.webp&w=1920&q=100',
      link: '#',
    },
  ];

  return (
    <div className="app-container w-full ">
      <h2 className="text-5xl text-center mt-[120px] mb-[50px] font-bold">
        Оживите свое жилое пространство
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {categories.map((category, index) => (
          <a
            href={category.link}
            key={index}
            className="bg-white border border-gray-300 rounded-2xl p-4 flex flex-col items-center hover:shadow-md transition"
          >
            <div className=" w-full flex items-center justify-center mb-[10px]">
              <img
                src={category.image}
                alt={category.title}
                className="h-[150px] object-contain"
              />
            </div>
            <h3 className={`text-[20px]  text-center ${category.color || 'text-gray-900'}`}>
              {category.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AllProduct;

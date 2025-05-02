import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useNavigate } from 'react-router';

const Test = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(''); // очищаем поле ввода после отправки
    }
  };


  // { id: 11, title: 'Кровати и матрасы', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fmatras.webp&w=1920&q=100' },
  // { id: 12, title: 'Угловые диваны', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fuglovoy-divan.webp&w=1920&q=100' },
  // { id: 13, title: 'Диваны', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fdivan-kreslo.webp&w=1920&q=100' },
  // { id: 14, title: 'Кресла', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fberjer.webp&w=1920&q=100' },
  // { id: 15, title: 'ТВ-тумбы', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Ftv-tumba.webp&w=1920&q=100' },
  // { id: 16, title: 'Столы', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fobedenniy-stol.webp&w=1920&q=100' },
  // { id: 17, title: 'Стулья', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fstul.webp&w=1920&q=100' },
  // { id: 18, title: 'Журнальные столики', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fzhurnalniy-stolik.webp&w=1920&q=100' },

  return (
    <div className="fixed z-50 bg-white w-full px-4 md:px-10">
      {/* Ваш логотип и другие элементы */}

      <div className="flex items-center border rounded-full px-2 py-1 h-[40px] w-[250px] border-gray-300">
        <IoIosSearch className="text-gray-500 w-5 h-5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Введите название"
          className="ml-2 text-sm font-semibold tracking-wid px-2 w-[140px] py-1 border-none focus:outline-none"
        />
        <button
          className="ml-auto h-[32px] tracking-wide bg-teal-700 text-white rounded-full px-3 py-1 text-sm border border-transparent hover:bg-white hover:text-teal-700 hover:border-teal-700 transition-all duration-200"
          onClick={handleSearch}
        >
          Поиск
        </button>
      </div>
    </div>
  );
};

export default Test;

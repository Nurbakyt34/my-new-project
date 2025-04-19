import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const allProducts = [
  { id: 1, name: 'Кровать Лондон', category: 'Кровати', image: '/img1.jpg' },
  { id: 2, name: 'Кровать Relax', category: 'Кровати', image: '/img2.jpg' },
  { id: 3, name: 'Диван Рим', category: 'Диван', image: '/img3.jpg' },
  { id: 4, name: 'Матрас Soft', category: 'Кровати', image: '/img4.jpg' },
  { id: 5, name: 'Стол Сити', category: 'Столовая', image: '/img5.jpg' },
  { id: 6, category: 'Стол', name: 'Журнальный столик Armina', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F515%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22ana33021p1p-2.jpg&w=1080&q=75' },
  { id: 7, category: 'Стол', name: 'Стул Melinton 4077 2 li серый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F574%2F1-livarno-yemek-odasi-0023.jpg&w=1080&q=75' },
  { id: 8, category: 'Стол', name: 'Обеденный стол Montego', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F188%2F21.jpg&w=1080&q=75' },
  { id: 9, category: '', name: 'ТВ-тумба Victor', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F428%2F1-victor-tv-unitesi-08.jpg&w=1080&q=75' },
  { id: 10, category: 'Стол', name: 'Кресло Flexy светло-серое', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F767%2F2-flexy-koltuk-takimlari-25.jpg&w=1080&q=75' },
  { id: 11, category: 'Диван', name: 'Трехместный диван Flexy светло-серый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F773%2F1-flexy-koltuk-takimlari-24.jpg&w=1080&q=75' },
  { id: 12, category: 'Диван', name: 'Угловой диван Cantona', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F59%2Fthumbs%2Fkdbjkds.jpg&w=1080&q=75' },
  { id: 13, category: 'Диван', name: 'Изголовье Verso', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1129%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-26esyii00100002-2.jpg&w=1080&q=75' },
];

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get('query')?.toLowerCase() || '';

  // Ищем товары
  const matchingProducts = allProducts.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  const handleClick = (productName) => {
    navigate(`/search?query=${encodeURIComponent(productName)}`);
  };

  return (
    <div className="app-container 
    
    p-14">
      {matchingProducts.length > 0 ? (


        <>
          <Breadcrumbs />
          <h2 className="text-2xl mt-5 font-bold mb-4">Результаты поиска: "{query}"</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {matchingProducts.map(product => (
              <div
                key={product.id}
                onClick={() => handleClick(product.name)}
                className="border rounded p-3 shadow cursor-pointer hover:bg-gray-100 transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-2"
                />
                <p className="text-base font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">{product.category}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-7xl mt-40  font-semibold text-red-600">Товар не найден:</h2>
      )}
    </div>
  );
};

export default SearchPage;

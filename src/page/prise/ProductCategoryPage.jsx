import React from 'react';
import { useParams } from 'react-router'; // Импортируем useParams из react-router-dom
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const ProductCategoryPage = () => {
  const { categoryId } = useParams(); // Получаем параметр categoryId из URL

  const products = [
    { id: 1, categoryId: 11, title: 'Изголовье Leny', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1141%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22ley2232nyny-2.jpg&w=1080&q=75', description: 'Удобная красная футболка для повседневной носки.' },
    { id: 2, categoryId: 12, title: 'Синие джинсы', image: 'https://via.placeholder.com/150', description: 'Джинсы с современным дизайном и комфортной посадкой.' },
    { id: 3, categoryId: 13, title: 'Кожаная сумка', image: 'https://via.placeholder.com/150', description: 'Элегантная кожаная сумка с золотыми элементами.' },
    { id: 4, categoryId: 14, title: 'Солнцезащитные очки', image: 'https://via.placeholder.com/150', description: 'Стильные очки для защиты от солнечных лучей.' },
    { id: 5, categoryId: 15, title: 'Стол для работы', image: 'https://via.placeholder.com/150', description: 'Комфортный стол для работы с удобными ящиками.' },
    { id: 6, categoryId: 16, title: 'Кресло для офиса', image: 'https://via.placeholder.com/150', description: 'Офисное кресло с регулируемой спинкой и сиденьем.' },
  ];

  // Фильтруем товары по категории
  const filteredProducts = products.filter(product => product.categoryId === parseInt(categoryId));

  return (
    <div className='app-container p-12'>
      <div className='mt-50'>

        <Breadcrumbs categoryId={categoryId} />
        <h1>Товары категории {categoryId}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryPage;

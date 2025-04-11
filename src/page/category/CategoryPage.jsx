import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// Пример данных товаров
const allProducts = [
  {
    id: 1,
    title: 'Диван угловой "Комфорт"',
    category: 'uglovye-divany',
    image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Fcategories%2Fkomplekty-myagkoy-mebeli.jpg&w=1080&q=100',
  },
  {
    id: 2,
    title: 'Спальный гарнитур "Люкс"',
    category: 'spalnye-garnitury',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Диван угловой "Элегант"',
    category: 'uglovye-divany',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    title: 'Матрас "Soft Dream"',
    category: 'matrasy',
    image: 'https://via.placeholder.com/300x200',
  },
  // Добавь больше товаров по желанию
];

function CategoryPage() {
  const { slug } = useParams(); // Получаем slug из URL
  const [products, setProducts] = useState([]); // Состояние для товаров

  useEffect(() => {
    // Фильтруем товары по категории
    const filteredProducts = allProducts.filter((product) => product.category === slug);
    console.log(filteredProducts); // Логируем результат фильтрации
    setProducts(filteredProducts);
  }, [slug]); // Фильтруем товары, когда slug изменяется

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Похожие товары: {slug.replace(/-/g, ' ')} {/* Отображаем название категории */}
      </h1>

      {/* Если нет товаров, выводим сообщение */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500">Нет товаров в этой категории.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-md p-4">
              <div className="h-48 w-full overflow-hidden rounded">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover mb-4"
                  style={{ width: "100%", height: "auto" }} // Попробуем явно задать размеры
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;

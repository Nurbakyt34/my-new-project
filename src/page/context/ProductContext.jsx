import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const loadProductsFromLocalStorage = () => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [
      { id: 11, title: 'Кровати и матрасы', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fmatras.webp&w=1920&q=100' },
      { id: 12, title: 'Угловые диваны', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fuglovoy-divan.webp&w=1920&q=100' },
      { id: 13, title: 'Диваны', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fdivan-kreslo.webp&w=1920&q=100' },
      { id: 14, title: 'Кресла', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fberjer.webp&w=1920&q=100' },
      { id: 15, title: 'ТВ-тумбы', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Ftv-tumba.webp&w=1920&q=100' },
      { id: 16, title: 'Столы', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fobedenniy-stol.webp&w=1920&q=100' },
      { id: 17, title: 'Стулья', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fstul.webp&w=1920&q=100' },
      { id: 18, title: 'Журнальные столики', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fimages%2Ffigures%2Fzhurnalniy-stolik.webp&w=1920&q=100' },
    ];
  };

  const [products, setProducts] = useState(loadProductsFromLocalStorage());

  const updateProduct = (id, newTitle, newImage) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, title: newTitle, image: newImage } // ✅ сохраняем всё остальное
          : product
      )
    );
  };
  

  return (
    <ProductContext.Provider value={{ products, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Хук для использования контекста
export const useProducts = () => useContext(ProductContext);

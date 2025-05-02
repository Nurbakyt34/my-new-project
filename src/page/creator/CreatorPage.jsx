import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const CreatorPage = () => {
  const { products, updateProduct } = useProducts();
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedImage, setEditedImage] = useState('');

  const startEdit = (product) => {
    setEditingId(product.id);
    setEditedTitle(product.title);
    setEditedImage(product.image);
  };

  const saveEdit = () => {
    updateProduct(editingId, editedTitle, editedImage);
    setEditingId(null);
    setEditedTitle('');
    setEditedImage('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedTitle('');
    setEditedImage('');
  };

  return (
    <div className="app-container p-12">
      <Breadcrumbs />
      <h1 className="text-3xl mt-5 font-bold mb-8">Редактировать категории</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            {editingId === product.id ? (
              <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  placeholder="Новое название"
                  className="border p-2 mb-2 w-full"
                />
                <input
                  type="text"
                  value={editedImage}
                  onChange={(e) => setEditedImage(e.target.value)}
                  placeholder="Новый URL картинки"
                  className="border p-2 mb-2 w-full"
                />
                <div className="flex gap-2">
                  <button
                    onClick={saveEdit}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Сохранить
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-400 text-white px-4 py-2 rounded"
                  >
                    Отмена
                  </button>
                </div>
              </>
            ) : (
              <>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-cover rounded mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <button
                  onClick={() => startEdit(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Редактировать
                </button>
                <div className="mt-4">
                  <h3 className="text-sm font-semibold mb-2 text-gray-600">Товары:</h3>
                  <ul className="text-sm list-disc list-inside">
                    {product.items?.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorPage;

import React from 'react'
import { ProductProvider } from './page/context/ProductContext';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import Layout from './layout/Layout';
import HomePage from './page/home/HomePage';
import About from './page/about/About';
import Tours from './page/tours/Tours';
import Catalog from './page/catalog/Catalog';
import ProductDetails from './page/product/ProductDetails';
import SimilarProducts from './page/similar/SimilarProducts';
import CategoryPage from './page/category/CategoryPage';
import KidPage from './page/kids/KidPage';
import GostinPage from './page/gostin/GostinPage';
import Kravat from './page/kravat/Kravat';
import SpalnyPage from './page/spalny/SpalnyPage';
import StolovPage from './page/stolov/StolovPage';
import SadPage from './page/sad/SadPage';
import SearchPage from './page/search/SearchPage';
import CreatorPage from './page/creator/CreatorPage';
import StranisPage from './page/stranis/StranisPage';
import ScrollToTop from './components/scroll/ScrollToTop';
import ProductCategoryPage from './page/prise/ProductCategoryPage';
// import { useEffect } from 'react';

const App = () => {


  return (
    <BrowserRouter basename="/my-week-project">
      <ScrollToTop />

      <ProductProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="category/:category" element={<SimilarProducts />} />
            <Route path="category/:slug" element={<CategoryPage />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="kids" element={<KidPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/creator" element={<CreatorPage />} />
            <Route path="/stranis" element={<StranisPage />} />
            <Route path="/prise/:categoryId" element={<ProductCategoryPage/>} />

            <Route path="gostin" element={<GostinPage />} />
            <Route path="kravat" element={<Kravat />} />
            <Route path="spalny" element={<SpalnyPage />} />
            <Route path="stolov" element={<StolovPage />} />
            <Route path="sad" element={<SadPage />} />
            <Route path="tours" element={<Tours />} />
          </Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>

  )
}

export default App
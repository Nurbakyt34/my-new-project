import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './layout/Layout';
import HomePage from './page/home/HomePage';
import About from './page/about/About';
import Tours from './page/tours/Tours';
import Catalog from './page/catalog/Catalog';
import ProductDetails from './page/product/ProductDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/tours" element={<Tours/>}/>


        </Route>
      </Routes>
    </Router>

  )
}

export default App
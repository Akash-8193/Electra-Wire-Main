import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

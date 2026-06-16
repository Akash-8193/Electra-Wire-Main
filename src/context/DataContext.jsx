import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as defaultProducts } from '../data/products';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

const defaultContent = {
  homeHeroTitle: 'Premium Fire-Resistant Electrical Wires for Safe & Reliable Power',
  homeHeroSubtitle: 'High-quality FR PVC wires engineered for maximum safety, durability, and performance. The trusted choice for residential, commercial, and industrial power solutions.',
  aboutUsTitle: '20+ Years of Excellence in Electrical Solutions',
  aboutUsText: 'Electra Wires is a trusted manufacturer of fire-resistant electrical wires based in New Delhi. With over two decades of experience, we provide reliable, durable, and safe wiring solutions for residential, commercial, and industrial needs.',
};

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('electra_products');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing saved products', e);
      }
    }
    return defaultProducts;
  });

  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem('electra_content');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing saved content', e);
      }
    }
    return defaultContent;
  });

  useEffect(() => {
    localStorage.setItem('electra_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('electra_content', JSON.stringify(content));
  }, [content]);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prev) => prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const updateContent = (key, value) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <DataContext.Provider
      value={{
        products,
        content,
        addProduct,
        updateProduct,
        deleteProduct,
        updateContent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

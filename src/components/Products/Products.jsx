import React from 'react';
import { products } from '../../data/Data.jsx';
import Product from '../Product/Product.jsx';
import './Products.css';

const Products = () => {
  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.products.map((product) => (
          <Product key={product.id} SingleP={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
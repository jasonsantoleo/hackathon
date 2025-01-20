import React from 'react';
import ProductCard from './product';
import Header from '../../layout/header';
import ProductControlsSummary from './product';

export const products = [
  { id: 1, name: 'Product 1', count: 10, image: '' },
  { id: 2, name: 'Product 2', count: 5, image: '' },
  { id: 3, name: 'Product 3', count: 8, image: '' },
];

const ProductList = () => {
  return (
    <div>
      <Header/>
      <ProductControlsSummary/>
    </div>
  );
};

export default ProductList;
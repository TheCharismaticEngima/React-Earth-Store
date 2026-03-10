import React, { useEffect } from 'react';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import './Shop.css';

function Shop() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('shop-page');
    }
    
    return () => {
      if (navbar) {
        navbar.classList.remove('shop-page');
      }
    };
  }, []);

  return (
    <div className="shop">
      <div className="shop-header">
        <h1>SHOP</h1>
        <p>Discover our eco-friendly collection</p>
      </div>
      <ProductGrid />
    </div>
  )
}

export default Shop;

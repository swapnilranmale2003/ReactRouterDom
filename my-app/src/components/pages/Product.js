// Product.js

import React from 'react';
import './Product.css';

export default function Product() {
  return (
    <div className="product-container">
      <img
        className="product-image"
        src="https://placekitten.com/300/200" // Replace with your actual product image URL
        alt="Product"
      />
      <div className="product-details">
        <h2 className="product-title">Sample Product</h2>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum purus in neque sollicitudin, quis vestibulum felis
          laoreet.
        </p>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
}

import React from 'react';
import data from '../data/data';
import "./Products.css"

const Products = () => {
  return (
    <div>
      <span id="products"></span>
      <div className="product-container">
        {data.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.nom} />
            <h3>{product.nom}</h3>
            <p>Prix: {product.prix}</p>
            <p>Montant: {product.montant}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

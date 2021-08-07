import React from "react";

export default function Product({ product, children }) {
  return (
    <div key={product.id} className="product" tabIndex={0}>
      <span className="product-container">
        <h3 className="product-name">{product.name}</h3>
        <div className="image-container">
          <img src={product.img} alt="" className="recipe-image" />
        </div>
      </span>
      {children}
    </div>
  );
}

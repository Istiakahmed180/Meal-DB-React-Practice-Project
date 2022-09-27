import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { strMeal, strMealThumb, strCategory, strArea } = product;
  return (
    <div className="product">
      <img src={strMealThumb} alt="" />
      <div style={{ textAlign: "center" }}>
        <h4>{strMeal}</h4>
        <p>Categoray: {strCategory}</p>
        <p>Area: {strArea}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="product-btn">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;

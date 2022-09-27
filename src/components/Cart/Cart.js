import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let mealName = [];
  for (const product of cart) {
    mealName.push(product.strMeal);
  }

  return (
    <div className="cart">
      <h2 style={{ textAlign: "center" }}>Order Summary</h2>
      <h3 style={{ marginLeft: "23px" }}>Slected Meal: {cart.length}</h3>
      <h4 style={{ marginLeft: "23px" }}>Meal Name: {mealName}</h4>
    </div>
  );
};

export default Cart;

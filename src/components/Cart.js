import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const isVisible = useSelector((state) => state.cart.isVisible);

  return (
    isVisible && (
      <div className="cart">
        <h2>My Cart</h2>
        {/* Render cart items here */}
      </div>
    )
  );
};

export default Cart;

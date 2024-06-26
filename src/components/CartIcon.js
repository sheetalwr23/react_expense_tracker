import React from "react";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const items = useSelector((state) => state.cart.items);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="cart-icon">
      <span>My Cart ({itemCount})</span>
    </div>
  );
};

export default CartIcon;

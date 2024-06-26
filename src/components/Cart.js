import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const isVisible = useSelector((state) => state.cart.isVisible);
  const items = useSelector((state) => state.cart.items);

  return (
    isVisible && (
      <div className="cart">
        <h2>My Cart</h2>
        {items.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          items.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
    )
  );
};

export default Cart;

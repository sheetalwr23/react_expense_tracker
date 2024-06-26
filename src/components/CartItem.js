import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "./cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <div className="cart-item-controls">
        <button onClick={() => dispatch(removeItemFromCart(item))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(addItemToCart(item))}>+</button>
        <button onClick={() => dispatch(clearItemFromCart(item))}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

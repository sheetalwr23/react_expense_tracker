import React from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "./cartSlice";

const CartToggleButton = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(toggleCart())}>My Cart</button>;
};

export default CartToggleButton;

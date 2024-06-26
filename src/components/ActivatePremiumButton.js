import React from "react";
import { useDispatch } from "react-redux";
import { activatePremium } from "./authSlice";

const ActivatePremiumButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(activatePremium())}>
      Activate Premium
    </button>
  );
};

export default ActivatePremiumButton;

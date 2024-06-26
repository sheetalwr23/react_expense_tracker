// PremiumButton.js

import React from "react";
import { useSelector } from "react-redux";

const PremiumButton = () => {
  const showPremiumButton = useSelector(
    (state) => state.expenses.showPremiumButton
  );

  return showPremiumButton ? (
    <div>
      <button>Activate Premium</button>
    </div>
  ) : null;
};

export default PremiumButton;

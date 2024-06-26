import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "./store";
import ExpenseForm from "./ExpenseForm";
import PremiumButton from "./PremiumButton";
import ThemeToggle from "./ThemeToggle";
import ActivatePremiumButton from "./ActivatePremiumButton";
import DownloadCSVButton from "./DownloadCSVButton";
import Cart from "./Cart";
import CartToggleButton from "./CartToggleButton";
import CartIcon from "./CartIcon";
import { addItemToCart } from "./cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isPremium = useSelector((state) => state.auth.isPremium);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    // Add more products as needed
  ];

  return (
    <Provider store={store}>
      <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
        <CartIcon />
        <CartToggleButton />
        <Cart />
        {isAuthenticated ? (
          <div>
            <ExpenseForm />
            {products.map((product) => (
              <div key={product.id}>
                <span>
                  {product.name} - ${product.price}
                </span>
                <button onClick={() => dispatch(addItemToCart(product))}>
                  Add to Cart
                </button>
              </div>
            ))}
            {isPremium ? (
              <>
                <ThemeToggle />
                <DownloadCSVButton />
              </>
            ) : (
              <PremiumButton />
            )}
          </div>
        ) : (
          <ActivatePremiumButton />
        )}
      </div>
    </Provider>
  );
};

export default App;

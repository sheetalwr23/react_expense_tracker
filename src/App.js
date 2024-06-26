import React from "react";
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
import Notification from "./Notification";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isPremium = useSelector((state) => state.auth.isPremium);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <Provider store={store}>
      <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Notification />
        <CartIcon />
        <CartToggleButton />
        <Cart />
        {isAuthenticated ? (
          <div>
            <ExpenseForm />
            {/* Product list and other components */}
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

import React from "react";
import { useSelector } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import PremiumButton from "./PremiumButton";
import ThemeToggle from "./ThemeToggle";
import ActivatePremiumButton from "./ActivatePremiumButton";
import DownloadCSVButton from "./DownloadCSVButton";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isPremium = useSelector((state) => state.auth.isPremium);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      {isAuthenticated ? (
        <div>
          <ExpenseForm />
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
  );
};

export default App;

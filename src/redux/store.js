import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import expensesReducer from "./expensesSlice";
import themeReducer from "./themeSlice";
import cartReducer from "./cartSlice"; // Add this line

const store = configureStore({
  reducer: {
    auth: authReducer,
    expenses: expensesReducer,
    theme: themeReducer,
    cart: cartReducer, // Add this line
  },
});

export default store;

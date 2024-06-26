import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import expensesReducer from "./expensesSlice";
import themeReducer from "./themeSlice";
import cartReducer from "./cartSlice";
import uiReducer from "./uiSlice"; // Add this line

const store = configureStore({
  reducer: {
    auth: authReducer,
    expenses: expensesReducer,
    theme: themeReducer,
    cart: cartReducer,
    ui: uiReducer, // Add this line
  },
});

export default store;

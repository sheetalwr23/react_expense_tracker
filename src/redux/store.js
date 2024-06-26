// store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import expensesReducer from "./expensesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expenses: expensesReducer,
    // Add other reducers as needed
  },
});

export default store;

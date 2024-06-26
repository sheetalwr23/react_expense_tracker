// expensesSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  showPremiumButton: false,
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
      state.showPremiumButton =
        state.expenses.reduce((total, expense) => total + expense.amount, 0) >
        10000;
    },
    // Add other reducers as needed, like fetching expenses from backend
  },
});

export const { addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;

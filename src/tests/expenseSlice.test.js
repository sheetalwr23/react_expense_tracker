// src/__tests__/expensesSlice.test.js
import expensesReducer, { addExpense, removeExpense } from "../expensesSlice";

describe("expensesSlice", () => {
  test("should handle initial state", () => {
    const initialState = [];
    expect(expensesReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  test("should handle addExpense", () => {
    const expense = { id: 1, name: "Test Expense", amount: 100 };
    const action = addExpense(expense);
    const newState = expensesReducer(undefined, action);
    expect(newState).toEqual([expense]);
  });

  test("should handle removeExpense", () => {
    const initialState = [{ id: 1, name: "Test Expense", amount: 100 }];
    const action = removeExpense(1);
    const newState = expensesReducer(initialState, action);
    expect(newState).toEqual([]);
  });
});

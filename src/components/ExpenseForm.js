// ExpenseForm.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "./expensesSlice";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = () => {
    dispatch(addExpense({ description, amount: parseInt(amount, 10) }));
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;

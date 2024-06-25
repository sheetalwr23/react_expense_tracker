// Expenses.js
import React, { useState, useEffect } from "react";
import { ref, set, push, onValue, remove } from "firebase/database";
import { db } from "./firebaseConfig";

const Expenses = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const expensesRef = ref(db, "expenses");
    onValue(expensesRef, (snapshot) => {
      const expensesData = snapshot.val();
      if (expensesData) {
        const expensesList = Object.keys(expensesData).map((key) => ({
          id: key,
          amount: expensesData[key].amount,
          description: expensesData[key].description,
          category: expensesData[key].category,
        }));
        setExpenses(expensesList);
      } else {
        setExpenses([]);
      }
    });
  }, []);

  const handleAddExpense = (e) => {
    e.preventDefault();
    const newExpense = { amount, description, category };
    const expensesRef = ref(db, "expenses");
    push(expensesRef, newExpense)
      .then(() => {
        setAmount("");
        setDescription("");
        setCategory("");
      })
      .catch((error) => console.error("Error adding expense: ", error));
  };

  const handleDeleteExpense = (id) => {
    const expenseRef = ref(db, `expenses/${id}`);
    remove(expenseRef)
      .then(() => {
        console.log("Expense successfully deleted");
      })
      .catch((error) => console.error("Error deleting expense: ", error));
  };

  const handleEditExpense = (expense) => {
    setAmount(expense.amount);
    setDescription(expense.description);
    setCategory(expense.category);
    setEditMode(true);
    setEditId(expense.id);
  };

  const handleUpdateExpense = () => {
    const expenseRef = ref(db, `expenses/${editId}`);
    const updatedExpense = { amount, description, category };
    set(expenseRef, updatedExpense)
      .then(() => {
        setAmount("");
        setDescription("");
        setCategory("");
        setEditMode(false);
        setEditId(null);
      })
      .catch((error) => console.error("Error updating expense: ", error));
  };

  return (
    <div className="expenses-container">
      <h2>Add Daily Expense</h2>
      <form onSubmit={editMode ? handleUpdateExpense : handleAddExpense}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Petrol">Petrol</option>
          <option value="Salary">Salary</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Shopping">Shopping</option>
          <option value="Others">Others</option>
        </select>
        <button type="submit">
          {editMode ? "Update Expense" : "Add Expense"}
        </button>
      </form>
      <h3>Expenses</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.amount} - {expense.description} ({expense.category})
            <button onClick={() => handleEditExpense(expense)}>Edit</button>
            <button onClick={() => handleDeleteExpense(expense.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;

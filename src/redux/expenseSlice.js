import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showNotification } from "./uiSlice";

export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(
        showNotification({
          status: "pending",
          title: "Loading...",
          message: "Fetching expenses!",
        })
      );

      const response = await fetch("/api/expenses");
      if (!response.ok) {
        throw new Error("Failed to fetch expenses.");
      }
      const data = await response.json();

      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched expenses successfully!",
        })
      );

      return data;
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: error.message || "Something went wrong!",
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.expenses = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default expensesSlice.reducer;

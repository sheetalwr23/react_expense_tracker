import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showNotification } from "./uiSlice";

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(
        showNotification({
          status: "pending",
          title: "Loading...",
          message: "Fetching cart items!",
        })
      );

      const response = await fetch("/api/cart"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch cart items.");
      }
      const data = await response.json();

      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched cart items successfully!",
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

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isVisible: false,
    status: "idle",
    error: null,
  },
  reducers: {
    toggleCart: (state) => {
      state.isVisible = !state.isVisible;
    },
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    clearItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  toggleCart,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;

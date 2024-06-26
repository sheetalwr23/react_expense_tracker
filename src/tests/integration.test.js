// src/__tests__/integration.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store"; // Your Redux store configuration
import App from "../App";

describe("Integration Tests", () => {
  test("renders App with Provider", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/Expense Tracker/i);
    expect(linkElement).toBeInTheDocument();
  });

  // Add more integration tests here
});

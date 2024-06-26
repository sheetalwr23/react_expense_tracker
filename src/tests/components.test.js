// src/__tests__/components.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    const linkElement = screen.getByText(/Expense Tracker/i);
    expect(linkElement).toBeInTheDocument();
  });

  // Add more component render tests here
});

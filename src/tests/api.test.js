// src/__tests__/api.test.js
import { fetchExpenses } from "../api"; // Replace with your actual API function
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/api/expenses", (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: "Expense 1", amount: 100 }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("API", () => {
  test("fetchExpenses should return expenses", async () => {
    const expenses = await fetchExpenses();
    expect(expenses).toEqual([{ id: 1, name: "Expense 1", amount: 100 }]);
  });

  // Add more API interaction tests here
});

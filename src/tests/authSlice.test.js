// src/__tests__/authSlice.test.js
import authReducer, { login, logout } from "../authSlice";

describe("authSlice", () => {
  test("should handle initial state", () => {
    const initialState = {
      isAuthenticated: false,
      user: null,
      token: null,
    };
    expect(authReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  test("should handle login", () => {
    const user = { id: 1, username: "testuser" };
    const token = "token123";
    const action = login({ user, token });
    const newState = authReducer(undefined, action);
    expect(newState.isAuthenticated).toBe(true);
    expect(newState.user).toEqual(user);
    expect(newState.token).toBe(token);
  });

  test("should handle logout", () => {
    const currentState = {
      isAuthenticated: true,
      user: { id: 1, username: "testuser" },
      token: "token123",
    };
    const action = logout();
    const newState = authReducer(currentState, action);
    expect(newState.isAuthenticated).toBe(false);
    expect(newState.user).toBe(null);
    expect(newState.token).toBe(null);
  });
});

// App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./authSlice";

const LoggedOutScreen = () => (
  <div>
    <h1>Welcome! Please log in.</h1>
    <button onClick={handleLogin}>Log In</button>
  </div>
);

const LoggedInScreen = () => (
  <div>
    <h1>Welcome! You are logged in.</h1>
    <button onClick={handleLogout}>Log Out</button>
  </div>
);

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      {isAuthenticated ? <LoggedInScreen /> : <LoggedOutScreen />}
    </div>
  );
};

export default App;

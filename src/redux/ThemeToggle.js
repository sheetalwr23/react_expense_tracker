import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Switch to {darkMode ? "Light" : "Dark"} Theme
    </button>
  );
};

export default ThemeToggle;

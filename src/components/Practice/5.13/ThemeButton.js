import React from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>: {theme === "light" ? " " : " "}</button>
  );
}

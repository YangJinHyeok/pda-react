import React, { useContext } from "react";
import { ThemeContext, useTheme } from "./ThemeProvider";

export default function ThemeButton() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme}>
      현재 테마 : {theme}
    </button>
  );
}

import React, { useContext } from "react";
import { useTheme } from "./ThemeProvider";
import { ThemeContext } from "./ThemeProvider";


export default function MyPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div style={{
        minHeight: 600,
        backgroundColor : theme === 'light' ? 'e9e9e9' : 'black'
      }}>
        MyPage
      </div>
    </div>
  )
}

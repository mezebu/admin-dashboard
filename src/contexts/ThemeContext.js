import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

const useThemeContext = () => {
  return useContext(ThemeContext);
};

const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const themeHandler = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdateContext.Provider value={themeHandler}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useThemeContext, useThemeUpdate };

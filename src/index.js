import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { theme } from "./styles";
import { ThemeProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MUIThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);

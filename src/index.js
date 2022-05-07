import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { theme } from "./styles";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthContextProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </MUIThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);

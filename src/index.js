import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { theme } from "./styles";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </MUIThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);

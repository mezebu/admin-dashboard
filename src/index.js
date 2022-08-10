import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { theme } from "./styles";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MUIThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);

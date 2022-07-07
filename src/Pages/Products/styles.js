import { createTheme } from "@mui/material";

const darkMode = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Quicksand"].join(","),
  },
});

const lightMode = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: ["Quicksand"].join(","),
  },
});
export { darkMode, lightMode };

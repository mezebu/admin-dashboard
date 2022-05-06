import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Quicksand"].join(","),
  },
});

const darkMode = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "rgb(0, 30, 60)",
      default: "rgb(27, 38, 53)",
    },
  },
  typography: {
    fontFamily: ["Quicksand"].join(","),
  },
});

const lightMode = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#fff",
      default: "rgb(244, 245, 250)",
    },
  },
  typography: {
    fontFamily: ["Quicksand"].join(","),
  },
});
export { theme, darkMode, lightMode };

import { createTheme } from "@mui/material/styles";

const lightMode = createTheme({
  palette: {
    mode: "light",
  },
});

const darkMode = createTheme({
  palette: {
    mode: "dark",
  },
});

export { lightMode, darkMode };

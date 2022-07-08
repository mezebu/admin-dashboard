import { Box, ListItemButton, styled } from "@mui/material";
import { createTheme } from "@mui/material";

const StyledSidebar = styled(Box)(({ theme }) => ({
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius,
}));

const TopSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 62,
});

const Center = styled(Box)(({ theme }) => ({
  padding: "0 13px",
  "&:hover": {
    borderRadius: theme.shape.borderRadius,
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  "&.Mui-hover": {
    borderRadius: theme.shape.borderRadius,
  },
}));

const BottomSecton = styled(Box)({
  padding: "0 13px",
});

const Logo = styled("span")({
  fontWeight: "bold",
  marginLeft: 6,
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
      paper: "rgb(244, 245, 250)",
      default: "rgb(244, 245, 250)",
    },
  },
  typography: {
    fontFamily: ["Quicksand"].join(","),
  },
});

export {
  StyledSidebar,
  TopSection,
  Center,
  BottomSecton,
  Logo,
  StyledListItemButton,
  darkMode,
  lightMode,
};

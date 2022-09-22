import { AppBar, Badge, useScrollTrigger } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { cloneElement } from "react";

export const StyledAppBar = styled(AppBar)({
  background: "rgba( 255, 255, 255, 0 )",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  backdropFilter: "blur(17px)",
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ElevationScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const darkMode = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "rgb(27, 38, 53)",
    },
  },
});

const lightMode = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "rgb(27, 38, 53)",
    },
  },
});

export { ElevationScroll, StyledBadge, darkMode, lightMode };

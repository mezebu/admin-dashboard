import { alpha, Box, InputBase, ListItemButton, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: theme.spacing(1),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledSidebar = styled(Box)(({ theme }) => ({
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius,
}));

const TopSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "purple",
  height: 70,
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
});
export {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledSidebar,
  TopSection,
  Center,
  BottomSecton,
  Logo,
  StyledListItemButton,
};

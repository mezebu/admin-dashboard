import { Box, ListItemButton, styled } from "@mui/material";

const StyledSidebar = styled(Box)(({ theme }) => ({
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius,
}));

const TopSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "purple",
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
});
export {
  StyledSidebar,
  TopSection,
  Center,
  BottomSecton,
  Logo,
  StyledListItemButton,
};

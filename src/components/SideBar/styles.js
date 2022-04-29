import { Box, ListItem, styled } from "@mui/material";

const Sidebar = styled(Box)({
  flex: 1,
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
  borderRight: "0.5px solid rgb(230 227 227)",
  minHeight: "100vh",
});

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

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    borderRadius: theme.shape.borderRadius,
  },
}));

const BottomSecton = styled(Box)({
  color: "yellow",
});

const Logo = styled("span")({
  fontWeight: "bold",
});
export { Sidebar, TopSection, Center, BottomSecton, Logo, StyledListItem };

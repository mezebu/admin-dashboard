import { Box, styled } from "@mui/material";

const Sidebar = styled(Box)({
  backgroundColor: "lightcoral",
  flex: 1,
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
});

const TopSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "purple",
  height: 70,
});

const Center = styled(Box)({
  color: "aqua",
});

const BottomSecton = styled(Box)({
  color: "yellow",
});

const Logo = styled("span")({});
export { Sidebar, TopSection, Center, BottomSecton, Logo };

import { Box, styled } from "@mui/material";

const Main = styled(Box)({
  display: "flex",
  padding: "15px 15px 0 15px",
});

const MainContainer = styled(Box)({
  backgroundColor: "lightblue",
  flex: 5,
  borderTopRightRadius: 10,
});

export { Main, MainContainer };

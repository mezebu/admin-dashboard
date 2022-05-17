import { Box, styled } from "@mui/material";

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary,
}));

export { IconWrapper };

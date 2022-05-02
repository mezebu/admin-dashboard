import { Box, styled } from "@mui/material";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const LeftWidgetContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const WidgetIcons = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export { WidgetWrapper, LeftWidgetContent, WidgetIcons };

import { styled, Typography } from "@mui/material";

export const StyledTypography = styled(Typography)(({ theme }) => ({
  background: theme.palette.info.main,
  paddingTop: 0.1,
  paddingBottom: 0.1,
  paddingLeft: 4,
  paddingRight: 4,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.success,
}));

import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const StyledTypography = styled(Typography)(({ theme }) => ({
  background: theme.palette.info.main,
  paddingTop: 0.1,
  paddingBottom: 0.1,
  paddingLeft: 4,
  paddingRight: 4,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.success,
}));

const Skills = () => {
  return (
    <Box marginTop={2}>
      <Card elevation={0}>
        <CardContent>
          <Typography sx={{ fontWeight: 600, pb: 3 }}>Skills</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <StyledTypography>React</StyledTypography>
            <StyledTypography>Javascript</StyledTypography>
            <StyledTypography>Redux</StyledTypography>
            <StyledTypography>Next.js</StyledTypography>
            <StyledTypography>Saas</StyledTypography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Skills;

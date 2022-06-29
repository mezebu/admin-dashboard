import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { StyledTypography } from "./styles";

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

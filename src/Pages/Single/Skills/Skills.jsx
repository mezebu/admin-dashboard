import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  return (
    <Box marginTop={2}>
      <Card elevation={0.5}>
        <CardContent>
          <Typography sx={{ fontWeight: 600, pb: 3 }}>Skills</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Skills;

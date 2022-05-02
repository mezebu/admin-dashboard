import React from "react";
import { Box, Grid } from "@mui/material";
import Chart from "./Chart/Chart";
import Features from "./Features/Features";

const Charts = () => {
  return (
    <Box>
      <Grid container spacing={2} paddingTop={3}>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          <Chart />
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Features />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Charts;

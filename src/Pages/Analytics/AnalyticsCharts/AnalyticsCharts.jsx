import { Box, Grid, Toolbar } from "@mui/material";
import React from "react";
import AnalyticsLine from "./AnalyticsLine";
import AnalyticsPie from "./AnalyticsPie";

const AnalyticsCharts = () => {
  return (
    <Box>
      <Toolbar />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <AnalyticsLine />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <AnalyticsPie />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsCharts;

import { Grid } from "@mui/material";
import React from "react";
import AnalyticsPie from "./AnalyticsPie";

const AnalyticsCharts = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <AnalyticsPie />
      </Grid>
    </Grid>
  );
};

export default AnalyticsCharts;

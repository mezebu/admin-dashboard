import { Grid } from "@mui/material";
import React from "react";
import AnimatedPage from "../../../components/PageAnimatons/AnimatedPage";
import AnalyticsWidget from "./AnalyticsWidget";

const AnalyticsGrid = () => {
  return (
    <AnimatedPage>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <AnalyticsWidget type="android" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <AnalyticsWidget type="apple" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <AnalyticsWidget type="reports" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <AnalyticsWidget type="orders" />
        </Grid>
      </Grid>
    </AnimatedPage>
  );
};

export default AnalyticsGrid;

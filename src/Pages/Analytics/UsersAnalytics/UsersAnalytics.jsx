import React from "react";
import { Box, Grid, Toolbar } from "@mui/material";
import AnalyticsTable from "./AnalyticsTable";

const UsersAnalytics = () => {
  return (
    <Box>
      <Toolbar />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <AnalyticsTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UsersAnalytics;

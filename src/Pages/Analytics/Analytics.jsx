import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";

import AnalyticsGrid from "./AnalyticsWidget/AnalyticsGrid";
import UsersAnalytics from "./UsersAnalytics/UsersAnalytics";
import AnalyticsCharts from "./AnalyticsCharts/AnalyticsCharts";
import Drawer from "../../components/Drawer/Drawer";

const Analytics = () => {
  return (
    <Drawer>
      <Box component="div">
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Hi, Welcome back!
        </Typography>

        <Toolbar />
        <AnalyticsGrid />
        <AnalyticsCharts />
        <UsersAnalytics />
      </Box>
    </Drawer>
  );
};

export default Analytics;

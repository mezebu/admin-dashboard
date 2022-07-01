import React from "react";
import { Box, Divider, Toolbar, Typography } from "@mui/material";

import AnalyticsGrid from "./AnalyticsWidget/AnalyticsGrid";
import UsersAnalytics from "./UsersAnalytics/UsersAnalytics";
import AnalyticsCharts from "./AnalyticsCharts/AnalyticsCharts";
import Drawer from "../../components/Drawer/Drawer";

const Analytics = () => {
  return (
    <Drawer>
      <Box component="div">
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Analytics
        </Typography>
        <Divider />
        <Toolbar />
        <AnalyticsGrid />
        <AnalyticsCharts />
        <UsersAnalytics />
      </Box>
    </Drawer>
  );
};

export default Analytics;

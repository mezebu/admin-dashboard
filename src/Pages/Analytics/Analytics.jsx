import React, { useState } from "react";
import { Box, CssBaseline, Grid, Toolbar, Typography } from "@mui/material";
import Appbar from "../../components/Appbar/Appbar";
import SideNav from "../../components/SideNav/SideNav";
import AnalyticsCard from "./AnalyticsCard/AnalyticsCard";

const drawerWidth = 240;

const Analytics = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: { sm: "flex" } }}>
      <CssBaseline />
      <Appbar drawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
      <SideNav
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        drawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box component="div">
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Hi, Welcome back!
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <AnalyticsCard type="android" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <AnalyticsCard type="apple" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <AnalyticsCard type="reports" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <AnalyticsCard type="orders" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Analytics;

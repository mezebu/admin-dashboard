import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  CssBaseline,
  Toolbar,
} from "@mui/material";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import ProfileWidgets from "./ProfileWidgets/ProfileWidgets";
import Skills from "./Skills/Skills";
import ProfileTable from "./ProfileTable/ProfileTable";
import About from "./About/About";
import Appbar from "../../components/Appbar/Appbar";
import SideNav from "../../components/SideNav/SideNav";

const drawerWidth = 240;

const Single = () => {
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
        <Box component="div" sx={{ width: "100%" }}>
          <Box sx={{ marginBottom: 5 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: 3 }}
              gutterBottom
            >
              Profile
            </Typography>
            <Divider />
          </Box>

          <Grid container spacing={2}>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <ProfileDetails />
              <Skills />
              <About />
            </Grid>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <ProfileWidgets />
              <ProfileTable />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Single;

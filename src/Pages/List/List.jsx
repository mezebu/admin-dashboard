import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  CssBaseline,
  Toolbar,
} from "@mui/material";
import EnhancedTable from "../../components/EnhancedTable/EnhancedTable";
import { useNavigate } from "react-router-dom";

import Appbar from "../../components/Appbar/Appbar";
import SideNav from "../../components/SideNav/SideNav";

const drawerWidth = 240;

const List = () => {
  const navigate = useNavigate();
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
          <Grid container sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Users
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    lg: "flex-end",
                    md: "flex-end",
                    sm: "flex-end",
                  },
                }}
              >
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ textTransform: "none" }}
                  onClick={() => navigate("/users/new")}
                >
                  Add New User
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 2, mb: 5 }} />
          <EnhancedTable />
        </Box>
      </Box>
    </Box>
  );
};

export default List;

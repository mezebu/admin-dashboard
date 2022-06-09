import React, { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Appbar from "../../components/Appbar/Appbar";
import SideNav from "../../components/SideNav/SideNav";
import ProductData from "./ProductData";

const drawerWidth = 240;

const Products = () => {
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
        <Box>
          <ProductData />
        </Box>
      </Box>
    </Box>
  );
};

export default Products;

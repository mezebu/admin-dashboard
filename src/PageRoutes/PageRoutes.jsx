import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Home, List, Login, New, Single } from "../Pages";
import Appbar from "../components/Appbar/Appbar";
import { Toolbar } from "@mui/material";
import SideNav from "../components/SideNav/SideNav";

const drawerWidth = 240;

const PageRoutes = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
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
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<New />} />
                <Route path="single" element={<Single />} />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<New />} />
                <Route path="product" element={<Single />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
};

export default PageRoutes;

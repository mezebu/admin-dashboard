import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Home, List, Login, New, Single } from "../Pages";
import Appbar from "../components/Appbar/Appbar";
import { Toolbar } from "@mui/material";
import SideNav from "../components/SideNav/SideNav";
import { formInputs, products } from "../formInputs";

const drawerWidth = 240;

const PageRoutes = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
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
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={formInputs} title="Add new user" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="product"
                  element={<New inputs={products} title="Add new Product" />}
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
};

export default PageRoutes;

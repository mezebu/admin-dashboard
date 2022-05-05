import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import { Home, List, Login, New, Single } from "./Pages";
import SideNav from "./components/SideNav/SideNav";
import { formInputs, products } from "./formInputs";
import Appbar from "./components/Appbar/Appbar";
import { useThemeContext } from "./ThemeContext";
import { darkMode } from "./styles";

const drawerWidth = 240;

function App() {
  const darkTheme = useThemeContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={darkTheme ? darkMode : ""}>
      <BrowserRouter>
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
                    path="new"
                    element={<New inputs={products} title="Add new Product" />}
                  />
                </Route>
              </Route>
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

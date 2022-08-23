import React from "react";
import { Box, Drawer, ThemeProvider } from "@mui/material";

import { drawer } from "./SidebarItems";
import { useThemeContext } from "../../contexts/ThemeContext";
import { lightMode, darkMode } from "./styles";

const SideNav = ({ drawerWidth, mobileOpen, drawerToggle }) => {
  const darkTheme = useThemeContext();

  return (
    <ThemeProvider theme={darkTheme ? darkMode : lightMode}>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={drawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default SideNav;

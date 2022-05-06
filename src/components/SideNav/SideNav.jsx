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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={drawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
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
            display: { xs: "none", sm: "block" },
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

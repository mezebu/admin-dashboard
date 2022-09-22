import React from "react";
import { Avatar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";

import { darkMode, ElevationScroll, StyledBadge, StyledAppBar } from "./styles";
import { useThemeContext, useThemeUpdate } from "../../contexts/ThemeContext";
import { lightMode } from "../../styles";

import Notifications from "../NotificationButton/Notifications";
import henry from "../../assest/hpic.jpg";

const Appbar = ({ drawerToggle, drawerWidth }) => {
  const themeHandler = useThemeUpdate();
  const darkTheme = useThemeContext();
  const themeToggle = darkTheme ? darkMode : lightMode;
  const icon = darkTheme ? (
    <BrightnessHighIcon fontSize="medium" color="primary" />
  ) : (
    <Brightness4Icon fontSize="medium" color="info" />
  );

  return (
    <ThemeProvider theme={themeToggle}>
      <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll>
          <StyledAppBar
            color="inherit"
            sx={{
              width: { md: `calc(100% - ${drawerWidth}px)` },
              ml: { md: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={drawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />

              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <Notifications />
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                sx={{ padding: 0, ml: 2, mr: 3 }}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={henry} />
                </StyledBadge>
              </IconButton>
              <IconButton
                edge="start"
                onClick={themeHandler}
                aria-label="open drawer"
              >
                {icon}
              </IconButton>
            </Toolbar>
          </StyledAppBar>
        </ElevationScroll>
      </Box>
    </ThemeProvider>
  );
};

export default Appbar;

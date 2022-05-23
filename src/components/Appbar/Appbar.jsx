import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import { useThemeContext, useThemeUpdate } from "../../contexts/ThemeContext";
import { lightMode } from "../../styles";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  darkMode,
  ElevationScroll,
  StyledBadge,
} from "./styles";
import Notifications from "../NotificationButton/Notifications";

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
          <AppBar
            color="inherit"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
              background: "rgba( 255, 255, 255, 0 )",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              backdropFilter: "blur(17px)",
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={drawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
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
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  />
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
          </AppBar>
        </ElevationScroll>
      </Box>
    </ThemeProvider>
  );
};

export default Appbar;

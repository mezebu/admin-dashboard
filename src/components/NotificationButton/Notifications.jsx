import React, { useState } from "react";
// prettier-ignore
import { Box, Avatar, Menu, MenuItem, Divider, IconButton } from "@mui/material";
import { Badge, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";

import { items } from "./items";

const Notifications = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const open = Boolean(menuOpen);

  const handleClick = (e) => {
    setMenuOpen(e.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={handleClick}
          size="large"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Badge badgeContent={5} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Box>
      <Menu
        anchorEl={menuOpen}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            borderRadius: 2,
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Notifactions
            </Typography>
            <Typography variant="body2">You have 5 unread messages</Typography>
          </Box>
          <Box sx={{ ml: 10 }}>
            <MarkChatUnreadIcon color="info" />
          </Box>
        </Box>
        <Divider />
        <Box sx={{ pl: 2, pt: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            New
          </Typography>
        </Box>

        {items.map(({ id, avatar, title, sub, time, icon }) => (
          <MenuItem key={id}>
            <ListItemAvatar>
              <Avatar>{avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={title}
              secondary={
                <React.Fragment>
                  {sub}
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {icon}
                    {time}
                  </Typography>
                </React.Fragment>
              }
            />
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default Notifications;

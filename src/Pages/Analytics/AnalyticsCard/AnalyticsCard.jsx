import React from "react";
import { Avatar, Box, Card, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import PestControlIcon from "@mui/icons-material/PestControl";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { IconWrapper } from "./styles";
import { green } from "@mui/material/colors";

const AnalyticsCard = ({ type }) => {
  let data;
  let style;
  switch (type) {
    case "android":
      data = {
        title: "Weekly Sales",
        desc: 510,
        icon: (
          <Avatar sx={{ width: 70, height: 70 }}>
            <AdbIcon color="success" fontSize="large" />
          </Avatar>
        ),
      };

      style = {
        backgroundColor: green[100],
      };

      break;
    case "apple":
      data = {
        title: "New Users",
        desc: 1.59,
        icon: (
          <Avatar>
            <AppleIcon fontSize="large" />
          </Avatar>
        ),
      };
      break;
    case "reports":
      data = {
        title: "Bug Reports",
        desc: 250,
        icon: (
          <Avatar>
            <PestControlIcon color="error" sx={{ borderRadius: 1, p: 0.5 }} />
          </Avatar>
        ),
      };
      break;
    case "orders":
      data = {
        title: "Item Orders",
        desc: 750,
        icon: (
          <Avatar>
            <LocalMallIcon color="warning" sx={{ borderRadius: 1, p: 0.5 }} />
          </Avatar>
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Card style={style} variant="outlined" sx={{ borderRadius: 3, mt: 5 }}>
      <IconWrapper>
        <Box>
          <Box sx={{ height: 70, mt: 3 }}>{data.icon}</Box>

          <Typography>test</Typography>
        </Box>
      </IconWrapper>
    </Card>
  );
};

export default AnalyticsCard;

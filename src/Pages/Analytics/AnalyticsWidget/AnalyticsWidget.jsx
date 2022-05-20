import React from "react";
import { Avatar, Box, Card, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import PestControlIcon from "@mui/icons-material/PestControl";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { IconWrapper } from "./styles";
import { blue, green, orange, red } from "@mui/material/colors";

const AnalyticsWidget = ({ type }) => {
  let data;
  let style;
  switch (type) {
    case "android":
      data = {
        title: "Weekly Sales",
        desc: "510k",
        icon: (
          <Avatar sx={{ width: 70, height: 70, bgcolor: green[300] }}>
            <AdbIcon sx={{ color: green[800] }} fontSize="large" />
          </Avatar>
        ),
      };

      style = {
        backgroundColor: green[100],
        color: green[900],
      };

      break;
    case "apple":
      data = {
        title: "New Users",
        desc: "1.59m",
        icon: (
          <Avatar sx={{ width: 70, height: 70, bgcolor: blue[200] }}>
            <AppleIcon sx={{ color: blue[500] }} fontSize="large" />
          </Avatar>
        ),
      };
      style = {
        backgroundColor: blue[100],
        color: blue[900],
      };
      break;
    case "reports":
      data = {
        title: "Bug Reports",
        desc: 250,
        icon: (
          <Avatar sx={{ width: 70, height: 70, bgcolor: red[200] }}>
            <PestControlIcon sx={{ color: red[700] }} fontSize="large" />
          </Avatar>
        ),
      };
      style = {
        backgroundColor: red[100],
        color: red[900],
      };
      break;
    case "orders":
      data = {
        title: "Item Orders",
        desc: "750k",
        icon: (
          <Avatar sx={{ width: 70, height: 70, bgcolor: orange[200] }}>
            <LocalMallIcon sx={{ color: orange[700] }} fontSize="large" />
          </Avatar>
        ),
      };
      style = {
        backgroundColor: "rgb(255, 247, 205)",
        color: orange[900],
      };
      break;
    default:
      break;
  }

  return (
    <Card style={style} elevation={0} sx={{ borderRadius: 3 }}>
      <IconWrapper>
        <Box>
          <Box sx={{ height: 70, mt: 4, mb: 3 }}>{data.icon}</Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              {data.desc}
            </Typography>
          </Box>
        </Box>
      </IconWrapper>
      <Typography
        variant="body2"
        sx={{ mb: 3, fontWeight: 700 }}
        align="center"
      >
        {data.title}
      </Typography>
    </Card>
  );
};

export default AnalyticsWidget;

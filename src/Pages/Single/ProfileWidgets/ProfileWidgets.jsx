import {
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const ProfileWidgets = () => {
  return (
    <Grid container spacing={1}>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Card elevation={0.5}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="h4" fontWeight={500}>
                  $ 2.500
                </Typography>
                <Typography variant="body2">Total Earnings</Typography>
              </Box>
              <Box>
                <AttachMoneyIcon color="primary" fontSize="large" />
              </Box>
            </Box>
            <Box sx={{ width: "100%", marginTop: 2 }}>
              <LinearProgress variant="determinate" value={80} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Card elevation={0.5}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="h4" fontWeight={500}>
                  30
                </Typography>
                <Typography variant="body2">Oders Today</Typography>
              </Box>
              <Box>
                <LocalMallIcon color="primary" fontSize="large" />
              </Box>
            </Box>
            <Box sx={{ width: "100%", marginTop: 2 }}>
              <LinearProgress variant="determinate" value={20} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Card elevation={0.5}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="h4" fontWeight={500}>
                  $ 1.500
                </Typography>
                <Typography variant="body2">Total Revenue</Typography>
              </Box>
              <Box>
                <AttachMoneyIcon color="primary" fontSize="large" />
              </Box>
            </Box>
            <Box sx={{ width: "100%", marginTop: 2 }}>
              <LinearProgress variant="determinate" value={50} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfileWidgets;

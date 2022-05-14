import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import * as dayjs from "dayjs";

import React from "react";
import CardWidgets from "./CardWidgets/CardWidgets";

const Widgets = () => {
  const date = dayjs().format("MMMM D");

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Dashboard
            </Typography>
            <Typography fontWeight={500} marginBottom={3}>
              Welcome back! We've missed you.👋
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                lg: "flex-end",
                md: "flex-end",
                sm: "flex-end",
              },
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{ textTransform: "none" }}
            >
              Today: {date}
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 2, mb: 5 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardWidgets type="user" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardWidgets type="order" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardWidgets type="earnings" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardWidgets type="balance" />
        </Grid>
      </Grid>
    </>
  );
};

export default Widgets;

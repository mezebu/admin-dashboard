import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import ProfileWidgets from "./ProfileWidgets/ProfileWidgets";
import Skills from "./Skills/Skills";

const NewUser = () => {
  return (
    <Box component="div" sx={{ width: "100%" }}>
      <Box sx={{ marginBottom: 5 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, marginBottom: 3 }}
          gutterBottom
        >
          Profile
        </Typography>
        <Divider />
      </Box>

      <Grid container spacing={2}>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <ProfileDetails />
          <Skills />
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          <ProfileWidgets />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewUser;

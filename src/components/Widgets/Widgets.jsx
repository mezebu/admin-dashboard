import { Grid } from "@mui/material";

import React from "react";
import CardWidgets from "./CardWidgets/CardWidgets";

const Widgets = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <CardWidgets />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <CardWidgets />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <CardWidgets />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <CardWidgets />
        </Grid>
      </Grid>
    </>
  );
};

export default Widgets;

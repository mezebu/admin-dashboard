import React from "react";
import { Grid } from "@mui/material";
import Chart from "./Chart/Chart";
import Features from "./Features/Features";
import TableList from "../TableList/TableList";

const Charts = () => {
  return (
    <Grid container spacing={2} marginTop={6}>
      <Grid item lg={8} md={12} sm={12} xs={12}>
        <Chart />
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Features />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TableList />
      </Grid>
    </Grid>
  );
};

export default Charts;

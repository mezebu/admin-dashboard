import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import LogisticsChart from "./LogisticsChart";
import LogisticsTable from "./LogisticsTable";

const LogisticsTotal = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Total Vehicles
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <LogisticsChart />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <LogisticsTable />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default LogisticsTotal;

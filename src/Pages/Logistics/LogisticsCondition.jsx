import React from "react";
import { Box, Card, Divider, Grid } from "@mui/material";
import { Paper, Toolbar, Typography } from "@mui/material";
import { vehiclesConditions } from "./data";

const LogisticsCondition = () => {
  return (
    <>
      <Toolbar />
      <Paper variant="outlined">
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Vehicle Conditions
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {vehiclesConditions.map(({ id, title, chart, value, subTitle }) => (
              <Grid key={id} item lg={4} md={12} sm={12} xs={12}>
                <Card variant="outlined" sx={{ minWidth: 200 }}>
                  <Typography
                    sx={{ mt: 1, fontSize: 17, fontWeight: 600 }}
                    align="center"
                  >
                    {title}
                  </Typography>
                  <Box>{chart}</Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600 }}
                    align="center"
                  >
                    {value}
                  </Typography>
                  <Typography variant="subtitle2" align="center" sx={{ mb: 2 }}>
                    {subTitle}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default LogisticsCondition;

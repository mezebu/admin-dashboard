import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { widgetsData } from "./data";

const LogisticsWidgets = () => {
  return (
    <Grid container spacing={2}>
      {widgetsData.map(({ id, icon, value, desc, bgColor }) => (
        <Grid key={id} lg={3} md={3} sm={6} xs={12} item>
          <Card variant="outlined" sx={{ minWidth: 200, background: bgColor }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>{icon}</Box>

                <Typography
                  sx={{ ml: 1, fontWeight: 600 }}
                  variant="h5"
                  gutterBottom
                >
                  {value}
                </Typography>
              </Box>
              <Typography variant="body2">{desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LogisticsWidgets;

import React from "react";
import { Box, Divider, Tooltip as MuiTooltip, Typography } from "@mui/material";
import { Button, Card, CardHeader } from "@mui/material";
import { IconButton, CardContent } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { pieData, pieLabelPosition } from "./chartData";

ChartJS.register(ArcElement, Tooltip, Legend);

const AnalyticsPie = () => {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton>
            <MuiTooltip title="Sources from social media">
              <InfoIcon />
            </MuiTooltip>
          </IconButton>
        }
        title={
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Social media sources
          </Typography>
        }
      />
      <Divider />
      <CardContent sx={{ p: 5 }}>
        <Doughnut data={pieData} options={pieLabelPosition} />
      </CardContent>
      <Divider />

      <Box sx={{ p: 3 }}>
        <Button
          sx={{ textTransform: "none" }}
          color="secondary"
          endIcon={<ArrowForwardIcon />}
        >
          See all visits
        </Button>
      </Box>
    </Card>
  );
};

export default AnalyticsPie;

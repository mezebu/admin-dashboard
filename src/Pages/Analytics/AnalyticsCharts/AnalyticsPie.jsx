import React from "react";
import {
  Box,
  Divider,
  Paper,
  Tooltip as MuiTooltip,
  Typography,
  Button,
} from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Instagram", "LinkedIn", "Twitter", "Other"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 65, 9],
      backgroundColor: [
        "rgba(63, 120, 43, 1)",
        "rgba(14, 118, 168, 1)",
        "rgba(0, 172, 238, 1)",
        "rgba(159, 72, 43, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 150, 173, 1)",
      ],
      borderWidth: 1,
      spacing: 4,
      cutout: "70%",
    },
  ],
};

const labelPosition = {
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const AnalyticsPie = () => {
  return (
    <Paper>
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 2,
          paddingRight: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Social media sources
        </Typography>
        <MuiTooltip title="Sources from social media">
          <InfoIcon />
        </MuiTooltip>
      </Box>
      <Divider />
      <Box sx={{ p: 5 }}>
        <Doughnut data={data} options={labelPosition} />
      </Box>
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
    </Paper>
  );
};

export default AnalyticsPie;

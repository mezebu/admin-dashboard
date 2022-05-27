import React from "react";
import {
  Box,
  Divider,
  Paper,
  Tooltip as MuiTooltip,
  Typography,
} from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import InfoIcon from "@mui/icons-material/Info";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Instagram", "LinkedIn", "Twitter"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
      spacing: 4,
      cutout: "80%",
    },
  ],
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
        <Typography>Social media sources</Typography>
        <MuiTooltip title="Sources from social media">
          <InfoIcon />
        </MuiTooltip>
      </Box>
      <Divider />
      <Box>
        <Doughnut data={data} />
      </Box>
    </Paper>
  );
};

export default AnalyticsPie;

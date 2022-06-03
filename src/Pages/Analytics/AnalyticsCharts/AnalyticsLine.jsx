import React from "react";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import { IconButton, Tooltip as MuiTooltip, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Line } from "react-chartjs-2";
import { data, options } from "./chartData";
import { Chart, CategoryScale, LinearScale, PointElement } from "chart.js";
import { LineElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsLine = () => {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton>
            <MuiTooltip title="Traffic Sources">
              <InfoIcon />
            </MuiTooltip>
          </IconButton>
        }
        title={
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Traffic Sources
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default AnalyticsLine;

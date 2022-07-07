import React from "react";
import Chart from "react-apexcharts";
import { Box } from "@mui/material";

import { exellentVehicles } from "./data";

const ExecellentVehiclesChart = () => {
  const { series, options } = exellentVehicles;
  return (
    <Box>
      <Chart options={options} series={series} type="radialBar" height={250} />
    </Box>
  );
};

export default ExecellentVehiclesChart;

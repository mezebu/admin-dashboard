import React from "react";
import { Box } from "@mui/material";
import Chart from "react-apexcharts";
import { badVehicles } from "./data";

const BadVehiclesChart = () => {
  const { series, options } = badVehicles;
  return (
    <Box>
      <Chart options={options} series={series} type="radialBar" height={250} />
    </Box>
  );
};

export default BadVehiclesChart;

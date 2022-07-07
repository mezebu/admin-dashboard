import React from "react";
import { Box } from "@mui/material";
import Chart from "react-apexcharts";
import { goodVehicles } from "./data";

const GoodVehiclesChart = () => {
  const { series, options } = goodVehicles;
  return (
    <Box>
      <Chart options={options} series={series} type="radialBar" height={250} />
    </Box>
  );
};

export default GoodVehiclesChart;

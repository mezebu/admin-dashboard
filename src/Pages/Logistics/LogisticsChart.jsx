import React from "react";
import Chart from "react-apexcharts";
import { doughnutData } from "./data";

const LogisticsChart = () => {
  const { options, series } = doughnutData;
  return (
    <div>
      <Chart options={options} series={series} type="radialBar" height={350} />
    </div>
  );
};

export default LogisticsChart;

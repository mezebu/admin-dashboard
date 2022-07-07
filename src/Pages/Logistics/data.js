import { v4 as uuidv4 } from "uuid";
import { blue, green, orange, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Badge from "@mui/material/Badge";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ReportIcon from "@mui/icons-material/Report";
import TimerIcon from "@mui/icons-material/Timer";

import ExellentVehiclesChart from "./ExecellentVehiclesChart";
import GoodVehiclesChart from "./GoodVehiclesChart";
import BadVehiclesChart from "./BadVehiclesChart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    fontSize: 10,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const dotIcon = (
  <Box sx={{ display: "flex", mr: 2, alignItems: "center" }}>
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
      fontSize="1rem"
    />
  </Box>
);

export const widgetsData = [
  {
    id: uuidv4(),
    icon: dotIcon,
    desc: "On route vehicles",
    value: 23,
    bgColor: green[300],
  },
  {
    id: uuidv4(),
    icon: <ReportProblemIcon color="error" />,
    desc: "Vehicles with errors",
    value: 7,
    bgColor: red[300],
  },
  {
    id: uuidv4(),
    icon: <ReportIcon color="warning" />,
    desc: "International deliveries",
    value: 20,
    bgColor: orange[300],
  },
  {
    id: uuidv4(),
    icon: <TimerIcon color="info" />,
    desc: "Late vehicles",
    value: 9,
    bgColor: blue[200],
  },
];

export const doughnutData = {
  series: [44, 55, 7],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 106;
            },
          },
        },
      },
    },
    labels: ["On route", "Available", "Out of service"],
  },
};

export const goodVehicles = {
  series: [10],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
      },
    },
    labels: ["Health"],
    fill: {
      colors: ["#FFA500"],
    },
  },
};

export const badVehicles = {
  series: [5],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
      },
    },
    labels: ["Health"],
    fill: {
      colors: ["#F44336"],
    },
  },
};

export const exellentVehicles = {
  series: [85],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
      },
    },
    labels: ["Health"],
    fill: {
      colors: ["#00A300"],
    },
  },
};

export const vehiclesConditions = [
  {
    id: uuidv4(),
    title: "Very Good",
    chart: <ExellentVehiclesChart />,
    value: 70,
    subTitle: "Execellent",
  },
  {
    id: uuidv4(),
    title: "Good",
    chart: <GoodVehiclesChart />,
    value: 20,
    subTitle: "Good Condition",
  },
  {
    id: uuidv4(),
    title: "Needs Attention",
    chart: <BadVehiclesChart />,
    value: 10,
    subTitle: "Needs Urgent Repair",
  },
];

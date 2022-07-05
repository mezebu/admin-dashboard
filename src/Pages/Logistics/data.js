import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { Box } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ReportIcon from "@mui/icons-material/Report";
import TimerIcon from "@mui/icons-material/Timer";

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
  { id: uuidv4(), icon: dotIcon, desc: "On route vehicles", value: 23 },
  {
    id: uuidv4(),
    icon: <ReportProblemIcon color="error" />,
    desc: "Vehicles with errors",
    value: 7,
  },
  {
    id: uuidv4(),
    icon: <ReportIcon color="warning" />,
    desc: "International deliveries",
    value: 20,
  },
  {
    id: uuidv4(),
    icon: <TimerIcon color="error" />,
    desc: "Late vehicles",
    value: 9,
  },
];

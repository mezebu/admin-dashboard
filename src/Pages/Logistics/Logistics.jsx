import React from "react";
import { Typography } from "@mui/material";

import Drawer from "../../components/Drawer/Drawer";
import LogisticsWidgets from "./LogisticsWidgets";

const Logistics = () => {
  return (
    <Drawer>
      <Typography variant="h6" fontWeight={600}>
        Logistics
      </Typography>
      <LogisticsWidgets />
    </Drawer>
  );
};

export default Logistics;

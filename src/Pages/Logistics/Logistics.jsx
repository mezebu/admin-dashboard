import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";

import Drawer from "../../components/Drawer/Drawer";
import LogisticsWidgets from "./LogisticsWidgets";
import AnimatedPage from "../../components/PageAnimatons/AnimatedPage";
import LogisticsTotal from "./LogisticsTotal";

const Logistics = () => {
  return (
    <Drawer>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }} gutterBottom>
          Logistics
        </Typography>
        <AnimatedPage>
          <LogisticsWidgets />
        </AnimatedPage>
        <Toolbar />
        <LogisticsTotal />
      </Box>
    </Drawer>
  );
};

export default Logistics;

import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Divider, Typography } from "@mui/material";

const items = [
  {
    id: uuidv4(),
    color: "3px solid rgb(104, 142, 255)",
    title: "On route",
    value: 44,
  },
  {
    id: uuidv4(),
    color: "3px solid rgb(0, 255, 127)",
    title: "Available",
    value: 55,
  },
  {
    id: uuidv4(),
    color: "3px solid rgb(255 ,165 ,0)",
    title: "Out of service",
    value: 7,
  },
];

const LogisticsTable = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="body1">Total</Typography>
      <Typography variant="h6" sx={{ fontSize: 29, fontWeight: 700 }}>
        100
      </Typography>
      <Divider />
      {items.map(({ id, color, title, value }) => (
        <Fragment key={id}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  border: color,
                  borderRadius: "50%",
                  height: "16px",
                  mr: "8px",
                  width: "16px",
                }}
              />

              <Typography gutterBottom>{title}</Typography>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {value}
            </Typography>
          </Box>
          <Divider sx={{ "&:nth-last-of-type(1)": { display: "none" } }} />
        </Fragment>
      ))}
    </Box>
  );
};

export default LogisticsTable;

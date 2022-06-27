import React, { useState } from "react";
import { Box, Grid, Paper, TextField, Toolbar } from "@mui/material";

import Drawer from "../../components/Drawer/Drawer";

const NewCustomer = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <Drawer>
      <Toolbar />
      <Paper sx={{ p: 4 }}>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <TextField
                required
                fullWidth
                id="first-name"
                label="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                required
                fullWidth
                id="last-name"
                label="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Drawer>
  );
};

export default NewCustomer;

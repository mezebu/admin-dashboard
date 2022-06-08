import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

const CustomersHeader = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Customers
            </Typography>
            <Typography fontWeight={500} marginBottom={3}>
              Welcome back! We've missed you.👋
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                lg: "flex-end",
                md: "flex-end",
                sm: "flex-end",
              },
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{ textTransform: "none" }}
            >
              Add
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 2, mb: 5 }} />
    </>
  );
};

export default CustomersHeader;

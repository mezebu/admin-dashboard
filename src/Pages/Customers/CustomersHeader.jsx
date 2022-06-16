import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CustomersHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Customers
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
              startIcon={<AddIcon />}
              onClick={() => navigate("/customers/newcustomer")}
            >
              Add New Customer
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 2, mb: 5 }} />
    </>
  );
};

export default CustomersHeader;

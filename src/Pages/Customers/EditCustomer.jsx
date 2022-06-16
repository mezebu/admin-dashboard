import React from "react";
import { Avatar, Box, Button, CircularProgress } from "@mui/material";
import { Grid, Paper, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Drawer from "../../components/Drawer/Drawer";
import useAxios from "../../useAxios";
import { Wrapper } from "../News/styles";

const EditCustomer = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const { data, isLoading } = useAxios(
    `https://62986369f2decf5bb7410008.mockapi.io/customers/${id}`
  );

  const { image, orders, location, firstname, lastname, amount } = data;

  return (
    <Drawer>
      <Paper elevation={0} sx={{ p: 5 }}>
        {isLoading && (
          <Wrapper>
            <CircularProgress />
          </Wrapper>
        )}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src={image}
            alt="customer"
            sx={{ m: 2, width: 150, height: 150 }}
          />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              value={firstname}
              required
              fullWidth
              id="firstName"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              variant="outlined"
              value={lastname}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth="Orders"
              id="lastName"
              variant="outlined"
              autoComplete="family-name"
              value={orders}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              variant="outlined"
              autoComplete="family-name"
              value={location}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              variant="outlined"
              autoComplete="family-name"
              value={amount}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/customers")}
          >
            Back
          </Button>
        </Box>
      </Paper>
    </Drawer>
  );
};

export default EditCustomer;

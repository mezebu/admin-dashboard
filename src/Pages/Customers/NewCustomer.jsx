import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Toolbar } from "@mui/material";
import axios from "axios";

import Drawer from "../../components/Drawer/Drawer";
import { useNavigate } from "react-router-dom";

const NewCustomer = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [location, setLocation] = useState("");
  const [orders, setOrders] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://62986369f2decf5bb7410008.mockapi.io/customers";

    axios
      .post(url, {
        firstname,
        lastname,
        location,
        amount,
        orders,
        image,
      })
      .then(() => {
        navigate("/customers");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Drawer>
      <Toolbar />
      <Paper sx={{ p: 5 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="first-name"
                label="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last-name"
                label="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="location"
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="orders"
                label="Orders"
                type="number"
                value={orders}
                onChange={(e) => setOrders(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="amount"
                label="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="amount"
                label="Paste Image Url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", m: 5 }}>
            <Button variant="contained" disableElevation type="submit">
              submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Drawer>
  );
};

export default NewCustomer;

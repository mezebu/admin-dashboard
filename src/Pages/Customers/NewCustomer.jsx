import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Drawer from "../../components/Drawer/Drawer";

const initialValues = {
  firstname: "",
  lastname: "",
  location: "",
  orders: "",
  amount: "",
  image: "",
};

const NewCustomer = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://62986369f2decf5bb7410008.mockapi.io/customers";

    axios
      .post(url, {
        firstname: values.firstname,
        lastname: values.lastname,
        location: values.location,
        amount: values.amount,
        orders: values.orders,
        image: values.image,
      })
      .then(() => {
        navigate("/customers");
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (props) => (e) => {
    setValues({ ...values, [props]: e.target.value });
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
                value={values.firstname}
                onChange={handleChange("firstname")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last-name"
                label="Last Name"
                value={values.lastname}
                onChange={handleChange("lastname")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="location"
                label="Location"
                value={values.location}
                onChange={handleChange("location")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="orders"
                label="Orders"
                type="number"
                value={values.orders}
                onChange={handleChange("orders")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="amount"
                label="Amount"
                type="number"
                value={values.amount}
                onChange={handleChange("amount")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="amount"
                label="Paste Image Url"
                value={values.image}
                onChange={handleChange("image")}
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

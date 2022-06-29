import React from "react";
import { Box, Button, Divider, Toolbar, Typography } from "@mui/material";
import { Grid, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import Drawer from "../../../components/Drawer/Drawer";
import useAxios from "../../../useAxios";
import { Wrapper } from "../../News/styles";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import Skills from "./Skills/Skills";
import ProfileWidgets from "./ProfileWidgets/ProfileWidgets";
import ProfileTable from "./ProfileTable/ProfileTable";
import About from "./About/About";

const EditCustomer = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const { data, isLoading } = useAxios(
    `https://62986369f2decf5bb7410008.mockapi.io/customers/${id}`
  );

  const { image, orders, location, firstname, lastname, amount } = data;

  return (
    <Drawer>
      {isLoading ? (
        <Wrapper>
          <CircularProgress />
        </Wrapper>
      ) : (
        <Box component="div" sx={{ width: "100%" }}>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Hey, {firstname}👋
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
                  sx={{ textTransform: "none", mb: 1 }}
                  onClick={() => navigate("/customers")}
                >
                  Back
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Divider />
          <Toolbar />
          <Grid container spacing={2}>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <ProfileDetails
                image={image}
                firstname={firstname}
                lastname={lastname}
              />
              <Skills />
              <About location={location} />
            </Grid>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <ProfileWidgets orders={orders} amount={amount} />
              <ProfileTable />
            </Grid>
          </Grid>
        </Box>
      )}
    </Drawer>
  );
};

export default EditCustomer;

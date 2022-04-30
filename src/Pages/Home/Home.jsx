import React from "react";
import { Main } from "./styles";
import { Box, Toolbar } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Widgets from "../../components/Widgets/Widgets";

const Home = () => {
  return (
    <Main>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Widgets />
      </Box>
    </Main>
  );
};

export default Home;

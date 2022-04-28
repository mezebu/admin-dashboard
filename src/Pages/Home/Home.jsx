import React from "react";
import { Main, MainContainer } from "./styles";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  return (
    <Main>
      <SideBar />
      <MainContainer>container</MainContainer>
    </Main>
  );
};

export default Home;

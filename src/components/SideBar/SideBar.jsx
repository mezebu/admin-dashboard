import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Sidebar, BottomSecton, Center, Logo, TopSection } from "./styles";

const SideBar = () => {
  return (
    <Sidebar>
      <TopSection>
        <Logo>Logo</Logo>
      </TopSection>
      <Divider variant="middle" />
      <Center>
        <List>
          <ListItem>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </Center>
      <BottomSecton>bottom</BottomSecton>
    </Sidebar>
  );
};

export default SideBar;

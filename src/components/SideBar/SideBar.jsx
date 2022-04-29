import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import React from "react";
import {
  Sidebar,
  BottomSecton,
  Center,
  Logo,
  TopSection,
  StyledListItem,
} from "./styles";

const SideBar = () => {
  return (
    <Sidebar>
      <TopSection>
        <Logo>Logo</Logo>
      </TopSection>
      <Divider variant="middle" />
      <Center>
        <List>
          <StyledListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </StyledListItem>
        </List>
      </Center>
      <BottomSecton>bottom</BottomSecton>
    </Sidebar>
  );
};

export default SideBar;

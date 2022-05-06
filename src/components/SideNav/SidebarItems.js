import { v4 as uuidv4 } from "uuid";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import {
  StyledSidebar,
  BottomSecton,
  Center,
  Logo,
  TopSection,
} from "./styles";
import CustomLink from "./CustomLink";

const drawerLinks = [
  {
    id: uuidv4(),
    title: "Dashboard",
    link: "/",
  },
  {
    id: uuidv4(),

    title: "Users",
    link: "/users",
  },
  {
    id: uuidv4(),

    title: "Products",
    link: "/products",
  },
  {
    id: uuidv4(),

    title: "Orders",
    link: "/orders",
  },
  {
    id: uuidv4(),

    title: "Delivery",
    link: "/delivery",
  },
  {
    id: uuidv4(),

    title: "Stats",
    link: "/stats",
  },
  {
    id: uuidv4(),

    title: "System",
    link: "/system",
  },
  {
    id: uuidv4(),

    title: "Logs",
    link: "/logs",
  },
  {
    id: uuidv4(),

    title: "Settings",
    link: "/settings",
  },
  {
    id: uuidv4(),

    title: "Profile",
    link: "/users/23",
  },
  {
    id: uuidv4(),

    title: "Logout",
    link: "/logout",
  },
];

const drawer = (
  <StyledSidebar>
    <TopSection>
      <Logo>Logo</Logo>
    </TopSection>
    <Divider variant="middle" />
    <Center>
      {drawerLinks.map(({ id, title, link }) => (
        <List key={id} sx={{ mt: 0.2 }} disablePadding>
          <CustomLink to={link}>
            <ListItem disablePadding>
              <ListItemText sx={{ ml: 1 }} primary={title} />
            </ListItem>
          </CustomLink>
        </List>
      ))}

      <Divider />
    </Center>
    <BottomSecton>bottom</BottomSecton>
  </StyledSidebar>
);

export { drawer };

import { v4 as uuidv4 } from "uuid";
import { Divider, List, ListItem } from "@mui/material";
import { ListItemIcon, ListItemText } from "@mui/material";
import { StyledSidebar, Center, Logo, TopSection } from "./styles";
import CustomLink from "./CustomLink";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import InsightsIcon from "@mui/icons-material/Insights";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const drawerLinks = [
  {
    id: uuidv4(),
    title: "Overview",
    link: "/",
    icon: <DashboardIcon />,
  },
  {
    id: uuidv4(),
    icon: <GroupAddIcon />,
    title: "Users",
    link: "/users",
  },
  {
    id: uuidv4(),
    icon: <CategoryIcon />,
    title: "Products",
    link: "/products",
  },
  {
    id: uuidv4(),
    icon: <PeopleAltIcon />,
    title: "Customers",
    link: "/customers",
  },
  {
    id: uuidv4(),
    icon: <InsightsIcon />,
    title: "Analytics",
    link: "/users/analytics",
  },
  {
    id: uuidv4(),
    icon: <LocalShippingIcon />,
    title: "Logistics",
    link: "/logistics",
  },
  {
    id: uuidv4(),
    icon: <NewspaperIcon />,
    title: "News",
    link: "/news",
  },
  {
    id: uuidv4(),

    title: "Settings",
    link: "/settings",
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
      {drawerLinks.map(({ id, title, link, icon }) => (
        <List key={id} sx={{ mt: 0.2 }} disablePadding>
          <CustomLink to={link}>
            <ListItem disablePadding>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </CustomLink>
        </List>
      ))}
    </Center>
  </StyledSidebar>
);

export { drawer };

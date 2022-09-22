import { v4 as uuidv4 } from "uuid";
import { Divider, List, ListItem } from "@mui/material";
import { ListItemIcon, ListItemText } from "@mui/material";
import { StyledSidebar, Center, Logo, TopSection } from "./styles";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CategoryIcon from "@mui/icons-material/Category";
import InsightsIcon from "@mui/icons-material/Insights";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import dashboard from "../../assest/dashboard.svg";
import ListIcon from "@mui/icons-material/List";
import CustomLink from "./CustomLink";

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
    icon: <ListIcon />,
    title: "Todo List",
    link: "/users/todolist",
  },
];

const drawer = (
  <StyledSidebar>
    <TopSection>
      <img src={dashboard} alt="dashboard-icon" height="40px" width="40px" />
      <Logo>Admin Dashboard</Logo>
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

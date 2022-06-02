import { v4 as uuidv4 } from "uuid";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { StyledSidebar, Center, Logo, TopSection } from "./styles";
import CustomLink from "./CustomLink";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CategoryIcon from "@mui/icons-material/Category";
import InsightsIcon from "@mui/icons-material/Insights";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const drawerLinks = [
  {
    id: uuidv4(),
    title: "Dashboard",
    link: "/",
    icon: <DashboardIcon />,
  },
  {
    id: uuidv4(),
    icon: <PersonIcon />,
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
    icon: <ProductionQuantityLimitsIcon />,
    title: "Orders",
    link: "/orders",
  },
  {
    id: uuidv4(),
    icon: <InsightsIcon />,
    title: "Analytics",
    link: "/users/analytics",
  },
  {
    id: uuidv4(),

    title: "System",
    link: "/system",
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

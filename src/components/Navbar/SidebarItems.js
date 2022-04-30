import { v4 as uuidv4 } from "uuid";
// prettier-ignore
import { Divider, List, ListItem, ListItemIcon, ListItemText, Typography,} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
// prettier-ignore
import { StyledSidebar, BottomSecton, Center, Logo, TopSection, StyledListItemButton,} from "./styles";

const main = [{ id: uuidv4(), section: "Main", title: "Dashboard", link: "/" }];
const list = [
  {
    id: uuidv4(),
    section: "Lists",
    title: [
      { id: uuidv4(), name: "Users" },
      { id: uuidv4(), name: "Products" },
      { id: uuidv4(), name: "Orders" },
      { id: uuidv4(), name: "Delivery" },
    ],
  },
];

const useful = [
  {
    id: uuidv4(),
    section: "Useful",
    title: [
      { id: uuidv4(), name: "Stats" },
      { id: uuidv4(), name: "Notification" },
    ],
  },
];

const service = [
  {
    id: uuidv4(),
    section: "Service",
    title: [
      { id: uuidv4(), name: "System" },
      { id: uuidv4(), name: "Logs" },
      { id: uuidv4(), name: "Settings" },
    ],
  },
];

const user = [
  {
    id: uuidv4(),
    section: "User",
    title: [
      { id: uuidv4(), name: "Profile" },
      { id: uuidv4(), name: "Logout" },
    ],
  },
];

export const drawer = (
  <StyledSidebar>
    <TopSection>
      <Logo>Logo</Logo>
    </TopSection>
    <Divider variant="middle" />
    <Center>
      {main.map(({ id, section, title }) => (
        <List key={id} disablePadding>
          <Typography sx={{ pl: 0.5, fontWeight: "700" }}>{section}</Typography>
          <ListItem disablePadding>
            <StyledListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </StyledListItemButton>
          </ListItem>
        </List>
      ))}
      {list.map(({ id, section, title }) => (
        <List key={id} disablePadding>
          <Typography sx={{ pl: 0.5, fontWeight: "700" }}>{section}</Typography>
          {title.map(({ id, name }) => (
            <ListItem key={id} disablePadding>
              <StyledListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      ))}
      {useful.map(({ id, section, title }) => (
        <List key={id} disablePadding>
          <Typography sx={{ pl: 0.5, fontWeight: "700" }}>{section}</Typography>
          {title.map(({ id, name }) => (
            <ListItem key={id} disablePadding>
              <StyledListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      ))}
      {service.map(({ id, section, title }) => (
        <List key={id} disablePadding>
          <Typography sx={{ pl: 0.5, fontWeight: "700" }}>{section}</Typography>
          {title.map(({ id, name }) => (
            <ListItem key={id} disablePadding>
              <StyledListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      ))}
      {user.map(({ id, section, title }) => (
        <List key={id} disablePadding>
          <Typography sx={{ pl: 0.5, fontWeight: "700" }}>{section}</Typography>
          {title.map(({ id, name }) => (
            <ListItem key={id} disablePadding>
              <StyledListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      ))}
      <Divider />
    </Center>
    <BottomSecton>bottom</BottomSecton>
  </StyledSidebar>
);

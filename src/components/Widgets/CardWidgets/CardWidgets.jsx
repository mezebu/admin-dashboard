import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import { LeftWidgetContent, WidgetIcons, WidgetWrapper } from "./styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaidIcon from "@mui/icons-material/Paid";
import { blue, green, purple, red } from "@mui/material/colors";

const CardWidgets = ({ type }) => {
  const amount = 100;
  const difference = 20;

  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "View all users",
        icon: (
          <WidgetIcons>
            <PersonIcon
              color="info"
              sx={{ backgroundColor: blue[50], borderRadius: 1, p: 0.5 }}
            />
          </WidgetIcons>
        ),
      };

      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "View all orders",
        icon: (
          <WidgetIcons>
            <AddShoppingCartIcon
              sx={{
                color: purple[500],
                backgroundColor: purple[100],
                borderRadius: 1,
                p: 0.5,
              }}
            />
          </WidgetIcons>
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View earnings",
        icon: (
          <WidgetIcons>
            <PaidIcon
              color="success"
              sx={{ backgroundColor: green[100], borderRadius: 1, p: 0.5 }}
            />
          </WidgetIcons>
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "Check balance",
        icon: (
          <WidgetIcons>
            <AccountBalanceIcon
              color="warning"
              sx={{ backgroundColor: red[100], borderRadius: 1, p: 0.5 }}
            />
          </WidgetIcons>
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Card>
      <CardContent>
        <WidgetWrapper>
          <LeftWidgetContent>
            <Typography variant="caption" fontWeight={700} gutterBottom>
              {data.title}
            </Typography>
            <Typography
              component="div"
              variant="h5"
              fontWeight={500}
              gutterBottom
            >
              {data.isMoney && "$"} {amount}
            </Typography>
            <Link underline="hover">
              <Typography variant="body2">{data.link}</Typography>
            </Link>
          </LeftWidgetContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <KeyboardArrowUpIcon color="success" />

              <Typography sx={{ color: "green" }} component="div">
                {difference}%
              </Typography>
            </Box>
            <Box>{data.icon}</Box>
          </Box>
        </WidgetWrapper>
      </CardContent>
    </Card>
  );
};

export default CardWidgets;

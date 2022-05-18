import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import MailIcon from "@mui/icons-material/Mail";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export const items = [
  {
    id: 1,
    avatar: <CardGiftcardIcon color="warning" sx={{ fontSize: 18 }} />,
    title: "Your order has been placed",
    sub: "Waiting for shipping",
    time: "about 57 minutes ago",
    icon: <AccessTimeIcon sx={{ fontSize: 15, mr: 1 }} />,
  },
  {
    id: 2,
    avatar: <MarkChatUnreadIcon color="success" sx={{ fontSize: 18 }} />,
    title: "You have a new message",
    sub: "2 unread messages",
    time: "2 days ago",
    icon: <AccessTimeIcon sx={{ fontSize: 15, mr: 1 }} />,
  },
  {
    id: 3,
    avatar: <MailIcon color="error" sx={{ fontSize: 18 }} />,
    title: "You have new mail",
    sub: "Sent from Jane Doe",
    time: "10 minutes ago",
    icon: <AccessTimeIcon sx={{ fontSize: 15, mr: 1 }} />,
  },
  {
    id: 4,
    avatar: <LocalShippingIcon sx={{ fontSize: 18 }} />,
    title: "Delivery Processing",
    sub: "Your order is being shipped",
    time: "5 days ago",
    icon: <AccessTimeIcon sx={{ fontSize: 15, mr: 1 }} />,
  },
];

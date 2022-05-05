import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export { Input, SmallAvatar };

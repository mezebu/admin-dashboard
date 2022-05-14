import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { green } from "@mui/material/colors";
import { Box, ListItemButton, styled } from "@mui/material";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    color: match ? green[500] : "",
    borderRadius: theme.shape.borderRadius,
    "&.Mui-hover": {
      borderRadius: theme.shape.borderRadius,
    },
  }));

  return (
    <Box
      sx={{
        background: match ? "rgba(0, 171, 85, 0.16)" : "",
        borderRadius: 1,
      }}
    >
      <Link
        to={to}
        {...props}
        style={{
          textDecoration: "none",
          color: match ? "rgb(34,139,34)" : "grey",
        }}
      >
        <StyledListItemButton>{children}</StyledListItemButton>
      </Link>
    </Box>
  );
};

export default CustomLink;

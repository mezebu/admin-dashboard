import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { green } from "@mui/material/colors";
import { Box } from "@mui/material";
import { StyledListItemButton } from "./styles";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const icon = match ? (
    <FiberManualRecordIcon sx={{ color: green[500], fontSize: 15 }} />
  ) : (
    <FiberManualRecordIcon sx={{ fontSize: 10 }} />
  );
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
        <StyledListItemButton>
          {icon}
          {children}
        </StyledListItemButton>
      </Link>
    </Box>
  );
};

export default CustomLink;

import React from "react";
import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const About = () => {
  return (
    <Box marginTop={2}>
      <Card elevation={0}>
        <CardContent>
          <Typography sx={{ fontWeight: 600, pb: 3 }}>About</Typography>
          <Box sx={{ display: "flex", mb: 2 }}>
            <HouseIcon fontSize="small" color="primary" />
            <Typography variant="body2" marginLeft={1}>
              Lives in{" "}
              <Link
                underline="hover"
                target="_blank"
                rel="noopener"
                href="https://en.wikipedia.org/wiki/Lagos"
              >
                Lagos,
              </Link>{" "}
              <Link
                underline="hover"
                target="_blank"
                rel="noopener"
                href="https://en.wikipedia.org/wiki/Nigeria"
              >
                Nigeria
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mb: 2 }}>
            <WorkOutlineIcon fontSize="small" color="success" />
            <Typography variant="body2" marginLeft={1}>
              Works at{" "}
              <Link
                underline="hover"
                target="_blank"
                rel="noopener"
                href="https://en.wikipedia.org/wiki/Google"
              >
                Google
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <LocationOnIcon fontSize="small" color="info" />
            <Typography variant="body2" marginLeft={1}>
              <Link
                underline="hover"
                target="_blank"
                rel="noopener"
                href="https://en.wikipedia.org/wiki/London"
              >
                London
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;

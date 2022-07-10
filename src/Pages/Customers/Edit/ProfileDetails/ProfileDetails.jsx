import React from "react";
import { Avatar, Box, Button, Card } from "@mui/material";
import { CardActions, CardContent, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const ProfileDetails = ({ image, firstname, lastname }) => {
  return (
    <Card elevation={0} sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: 600, pb: 3 }}>
            Profile Details
          </Typography>
          <Box>
            <Button
              sx={{ textTransform: "none" }}
              variant="outlined"
              size="small"
              disableElevation
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar sx={{ width: 150, height: 150 }} src={image} />
        </Box>
        <Typography fontWeight={500} align="center">
          {firstname} {lastname}
        </Typography>
        <Typography sx={{ fontSize: 13, fontWeight: 400 }} align="center">
          Sincere@april.biz
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ textTransform: "none" }}
          variant="contained"
          size="small"
          disableElevation
        >
          Follow
        </Button>
        <Button
          sx={{ textTransform: "none" }}
          variant="contained"
          size="small"
          disableElevation
        >
          Message
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileDetails;

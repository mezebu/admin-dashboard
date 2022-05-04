import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const ProfileDetails = () => {
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
          <Avatar
            sx={{ width: 150, height: 150 }}
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Box>
        <Typography fontWeight={500} align="center">
          Leanne Graham
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

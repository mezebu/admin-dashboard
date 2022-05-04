import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Input = styled("input")({
  display: "none",
});

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const New = ({ inputs, title }) => {
  return (
    <Box component="div" sx={{ width: "100%" }}>
      <Box sx={{ marginBottom: 5 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, marginBottom: 3 }}
          gutterBottom
        >
          {title}
        </Typography>
        <Divider />

        <Toolbar />
        <Paper elevation={0.8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 300,
                }}
              >
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      badgeContent={<PhotoCamera />}
                    >
                      <SmallAvatar
                        alt="profile"
                        sx={{ width: 100, height: 100 }}
                      />
                    </Badge>
                  </IconButton>
                </label>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={8}>
              <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  {inputs.map(({ id, type, label, placeholder }) => (
                    <Grid item xs={12} sm={12} md={12} lg={6} key={id}>
                      <TextField
                        fullWidth
                        id={id}
                        label={label}
                        type={type}
                        autoFocus
                        sx={{ mt: 2 }}
                        variant="standard"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default New;

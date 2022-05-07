import React, { useEffect, useState } from "react";
import { Box, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { Badge, IconButton, Button, CssBaseline } from "@mui/material";
import { Divider, Grid } from "@mui/material";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import { db, auth, storage } from "../../firebase";
import { Input, SmallAvatar } from "./styles";
import Appbar from "../../components/Appbar/Appbar";
import SideNav from "../../components/SideNav/SideNav";

const drawerWidth = 240;

const New = ({ inputs, title }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [imageUpload, setImageUpload] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleInputs = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", response.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setImageUpload(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  return (
    <Box sx={{ display: { sm: "flex" } }}>
      <CssBaseline />
      <Appbar drawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
      <SideNav
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        drawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
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
            <Paper elevation={0} sx={{ p: 2 }}>
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
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <Badge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          badgeContent={<PhotoCamera />}
                        >
                          <SmallAvatar
                            alt="profile"
                            src={file ? URL.createObjectURL(file) : ""}
                          />
                        </Badge>
                      </IconButton>
                    </label>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={8}>
                  <Box sx={{ p: 2 }}>
                    <Grid container spacing={2}>
                      {inputs.map(({ id, type, label }) => (
                        <Grid item xs={12} sm={12} md={12} lg={6} key={id}>
                          <TextField
                            fullWidth
                            id={id}
                            label={label}
                            type={type}
                            autoFocus
                            sx={{ mt: 2 }}
                            variant="standard"
                            onChange={handleInputs}
                            required
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 10,
                  mb: 5,
                }}
              >
                <Button
                  disabled={imageUpload !== null && imageUpload < 100}
                  variant="contained"
                  type="Submit"
                  disableElevation
                >
                  Submit
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default New;

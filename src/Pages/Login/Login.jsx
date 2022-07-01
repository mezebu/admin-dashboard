import React, { useContext, useState } from "react";
import { Avatar, Box, Container, Typography, TextField } from "@mui/material";
import { FormControlLabel, Checkbox, Button } from "@mui/material";
import { Grid, Link, Alert } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Alert severity="info">
            Use test@test.com and test12345 to sign in
          </Alert>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            value={email}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, p: 2 }}
            disableElevation
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link underline="hover" href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link underline="hover" href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {error && (
            <Typography
              align="center"
              sx={{ color: "error.main", marginTop: 5 }}
            >
              {error}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import UsersTable from "../../components/UsersTable/UsersTable";
import { useNavigate } from "react-router-dom";
import Drawer from "../../components/Drawer/Drawer";

const List = () => {
  const navigate = useNavigate();

  return (
    <Drawer>
      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Users
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                lg: "flex-end",
                md: "flex-end",
                sm: "flex-end",
              },
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{ textTransform: "none" }}
              onClick={() => navigate("/users/new")}
            >
              Add New User
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 5 }} />
      <UsersTable />
    </Drawer>
  );
};

export default List;

import { Box } from "@mui/material";

import Widgets from "../../components/Widgets/Widgets";
import Charts from "../../components/Charts/Charts";

const Home = () => {
  return (
    <Box component="div">
      <Widgets />
      <Charts />
    </Box>
  );
};

export default Home;

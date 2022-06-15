import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Drawer from "../../components/Drawer/Drawer";
import useAxios from "../../useAxios";
import axios from "axios";

const EditCustomer = () => {
  let { id } = useParams();
  const url = `https://62986369f2decf5bb7410008.mockapi.io/customers`;
  const [test, setTest] = useState("");
  console.log(test);

  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then(({ data }) => {
        setTest(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Drawer>
      <Box>
        <Typography>edituser</Typography>
      </Box>
    </Drawer>
  );
};

export default EditCustomer;

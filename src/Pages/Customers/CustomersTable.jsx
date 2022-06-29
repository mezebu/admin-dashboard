import React, { useEffect, useState } from "react";
import { IconButton, TableBody } from "@mui/material";
import { TableCell, TableContainer } from "@mui/material";
import { TableHead, TableRow, Paper, Avatar, Table } from "@mui/material";
import { Divider, Skeleton, TablePagination, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const url = "https://62986369f2decf5bb7410008.mockapi.io/customers";

const CustomersTable = () => {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const getCustomers = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url);

        setCustomers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCustomers();
  }, []);

  const handleEdit = (id) => {
    navigate(`/customers/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then(() => {
        const deleteCustomer = customers.filter(
          (customer) => customer.id !== id
        );
        setCustomers(deleteCustomer);
      })
      .catch((error) => console.log(error));
  };

  const skeletonArray = Array(5).fill("");

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="left"> Name</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Orders</TableCell>
            <TableCell align="left">Spent(£)</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(
              ({
                id,
                image,
                orders,
                location,
                firstname,
                lastname,
                amount,
              }) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  <TableCell component="th" scope="row">
                    <Avatar src={image} width={40} height={40} />
                  </TableCell>
                  <TableCell align="left">
                    <Typography>
                      {firstname} {lastname}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography>{location}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography>{orders}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="subtitle2" color="green">
                      £{amount}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="view-customer"
                      onClick={() => handleEdit(id)}
                    >
                      <VisibilityIcon color="primary" />
                    </IconButton>
                    <IconButton
                      aria-label="view-customer"
                      onClick={() => handleDelete(id)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            )}
          {isLoading &&
            skeletonArray.map(() => (
              <TableRow key={uuidv4()}>
                <TableCell align="center">
                  <Skeleton
                    variant="circular"
                    width={40}
                    height={40}
                    animation="wave"
                  />
                </TableCell>
                <TableCell align="left">
                  <Skeleton variant="text" width={70} animation="wave" />
                </TableCell>
                <TableCell align="left">
                  <Skeleton variant="text" width={70} animation="wave" />
                </TableCell>
                <TableCell align="left">
                  <Skeleton variant="text" width={70} animation="wave" />
                </TableCell>
                <TableCell align="left">
                  <Skeleton variant="text" width={70} animation="wave" />
                </TableCell>
                <TableCell align="left">
                  <Skeleton variant="text" width={50} animation="wave" />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Divider />
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={customers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default CustomersTable;

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Toolbar, Typography } from "@mui/material";
import { rows } from "./data";

const TableList = () => {
  return (
    <>
      <Toolbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Tracking ID</TableCell>
              <TableCell align="center">Customer</TableCell>
              <TableCell align="center">Product</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Payment Method</TableCell>
              <TableCell align="center">
                <Box>
                  <Typography>Status</Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(
              ({ id, customer, product, method, approved, amount, image }) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar alt="Customer" src={image} />
                  </TableCell>
                  <TableCell>{id}</TableCell>
                  <TableCell align="center">{customer}</TableCell>
                  <TableCell align="center">{product}</TableCell>
                  <TableCell align="center">{amount}</TableCell>
                  <TableCell align="center">{method}</TableCell>
                  <TableCell align="center">test</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableList;

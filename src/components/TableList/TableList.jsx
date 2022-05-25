import React, { useState } from "react";
// prettier-ignore
import {Table, TableBody, TableCell, TableRow, Avatar, Button} from "@mui/material";
import { TableHead, Typography, Paper, TableContainer } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { customers } from "./data";

const TableList = () => {
  const [customerArray, setCustomerArray] = useState(customers);
  const [sortStatus, setSortStatus] = useState(true);

  const handleAmountSort = () => {
    let data = [...customerArray];
    if (sortStatus) {
      const sorted = data.sort((a, b) => a.amount - b.amount);
      setCustomerArray(sorted);
      setSortStatus(!sortStatus);
    } else {
      const sorted = data.sort((a, b) => b.amount - a.amount);
      setCustomerArray(sorted);
      setSortStatus(!sortStatus);
    }
  };

  const handleIdSort = () => {
    let data = [...customerArray];
    if (sortStatus) {
      const sorted = data.sort((a, b) => a.id - b.id);
      setCustomerArray(sorted);
      setSortStatus(!sortStatus);
    } else {
      const sorted = data.sort((a, b) => b.id - a.id);
      setCustomerArray(sorted);
      setSortStatus(!sortStatus);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>
              <Button
                sx={{ textTransform: "none" }}
                endIcon={<SortIcon />}
                onClick={handleIdSort}
              >
                Tracking ID
              </Button>
            </TableCell>
            <TableCell align="center">Customer</TableCell>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">
              <Button
                sx={{ textTransform: "none" }}
                endIcon={<SortIcon />}
                onClick={handleAmountSort}
              >
                Amount
              </Button>
            </TableCell>
            <TableCell align="center">Payment Method</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customerArray.map(
            ({ id, customer, product, method, status, amount, image }) => (
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
                <TableCell align="center">
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 500,
                      borderRadius: 1,
                      p: 1,
                      background:
                        status === "Approved"
                          ? "rgba(84, 214, 44, 0.16)"
                          : "rgba(255, 72, 66, 0.16)",

                      color:
                        status === "Approved"
                          ? "rgb(34, 154, 22)"
                          : "rgb(183, 33, 54)",
                    }}
                  >
                    {status}
                  </Typography>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;

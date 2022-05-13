import React from "react";
// prettier-ignore
import {Table, TableBody, TableCell, TableRow, Avatar} from "@mui/material";
import { TableHead, Typography, Paper, TableContainer } from "@mui/material";
import { rows } from "./data";

import styles from "./styles.module.css";

const TableList = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Tracking ID</TableCell>
            <TableCell align="center">Customer</TableCell>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Payment Method</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
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
                  <Typography className={styles[status]}>{status}</Typography>
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

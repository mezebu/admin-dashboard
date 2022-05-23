import React from "react";
import * as dayjs from "dayjs";
import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Typography } from "@mui/material";
import { StyledTableCell } from "./styles";
import { transactions } from "./data";

const AnalyticsTable = () => {
  const date = dayjs().format("D MMM YYYY");
  const time = dayjs().format("h:mm A");

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <Typography
            variant="h5"
            sx={{ pt: 3, pb: 2, pl: 2, fontWeight: 600 }}
          >
            Recent Transactions
          </Typography>
          <TableRow>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(({ id, image, label, user, amount, status }) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={image} alt="user" />
                  <Box sx={{ ml: 4 }}>
                    <Typography variant="text.secondary">{label}</Typography>
                    <Typography fontWeight={600}>{user}</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">{date}</Typography>
                <Typography variant="subtitle2"> {time}</Typography>
              </TableCell>
              <TableCell align="center">${amount}</TableCell>
              <TableCell align="center">
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 500,
                    p: 1,
                    background:
                      status === "In progress"
                        ? "rgba(255, 193, 7, 0.16)"
                        : status === "Completed"
                        ? "rgba(84, 214, 44, 0.16)"
                        : status === "Failed"
                        ? "rgba(255, 72, 66, 0.16)"
                        : "rgb(255, 230, 255)",
                    borderRadius: 1,
                    color:
                      status === "In progress"
                        ? "rgb(183, 129, 3)"
                        : status === "Completed"
                        ? "rgb(34, 154, 22)"
                        : status === "Failed"
                        ? "rgb(183, 33, 54)"
                        : "rgb(255, 77, 255)",
                  }}
                >
                  {status}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnalyticsTable;

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer } from "@mui/material";
import { TableHead, TableRow, Paper, Avatar } from "@mui/material/TableHead";
import { Divider, Skeleton, TablePagination, Typography } from "@mui/material";

import useAxios from "../../useAxios";

const CustomersTable = () => {
  const { data, isLoading } = useAxios(
    "https://62986369f2decf5bb7410008.mockapi.io/customers"
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const skeletonArray = Array(5).fill("");

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell> Name</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Fat&nbsp;(g)</TableCell>
            <TableCell align="left">Carbs&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar src={row.name.image} width={40} height={40} />
                </TableCell>
                <TableCell align="left">
                  <Typography>
                    {row.name.firstname} {row.name.lastname}
                  </Typography>
                </TableCell>
                <TableCell align="left">test</TableCell>
              </TableRow>
            ))}
          {isLoading &&
            skeletonArray.map((index) => (
              <TableRow key={index}>
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
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Divider />
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default CustomersTable;

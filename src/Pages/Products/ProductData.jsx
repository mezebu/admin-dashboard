import React, { useState } from "react";
import { Box, Divider, Paper, Table, TableBody } from "@mui/material";
import {
  TableHead,
  CircularProgress,
  TableRow,
  ThemeProvider,
} from "@mui/material";
import { TableContainer, TableCell, TablePagination } from "@mui/material";
import useAxios from "../../useAxios";
import { Wrapper } from "../News/styles";
import ProductsItems from "./ProductsItems";
import { useThemeContext } from "../../contexts/ThemeContext";
import { darkMode, lightMode } from "./styles";

const ProductData = () => {
  const darkTheme = useThemeContext();
  const switchTheme = darkTheme ? darkMode : lightMode;
  // prettier-ignore
  const { data, error, isLoading } = useAxios("https://62986369f2decf5bb7410008.mockapi.io/products");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ThemeProvider theme={switchTheme}>
      <Box>
        {error && <Wrapper>{error}</Wrapper>}
        {isLoading ? (
          <Wrapper>
            <CircularProgress />
          </Wrapper>
        ) : (
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="center">Stock</TableCell>
                  <TableCell align="center">Price($)</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product) => (
                    <ProductsItems key={product.id} product={product} />
                  ))}
              </TableBody>
            </Table>
            <Divider />
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, 20]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default ProductData;

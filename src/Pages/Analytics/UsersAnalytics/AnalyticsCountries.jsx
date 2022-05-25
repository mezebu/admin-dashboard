import React from "react";
import { Box, Button, Paper, Table, TableBody } from "@mui/material";
import { TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { countries } from "./data";
import { StyledCountryTableCell, StyledTableRow } from "./styles";

const AnalyticsCountries = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <Typography
            variant="h6"
            sx={{ pt: 3, pb: 2, pl: 2, fontWeight: 600 }}
          >
            Countries
          </Typography>
          <TableRow>
            <StyledCountryTableCell>Country</StyledCountryTableCell>
            <StyledCountryTableCell align="right">Value</StyledCountryTableCell>
            <StyledCountryTableCell align="right">SEO</StyledCountryTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map(({ id, flag, country, seo, value }) => (
            <StyledTableRow key={id}>
              <StyledCountryTableCell component="th" scope="row">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={flag} alt="flag" width="30" height="24" />
                  <Typography variant="subtitle2" sx={{ ml: 2 }}>
                    {country}
                  </Typography>
                </Box>
              </StyledCountryTableCell>
              <StyledCountryTableCell align="right">
                {value}
              </StyledCountryTableCell>
              <StyledCountryTableCell align="right">
                {seo}
              </StyledCountryTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <Box sx={{ p: 3 }}>
          <Button
            sx={{ textTransform: "none" }}
            color="secondary"
            endIcon={<ArrowForwardIcon />}
          >
            See more
          </Button>
        </Box>
      </Table>
    </TableContainer>
  );
};

export default AnalyticsCountries;

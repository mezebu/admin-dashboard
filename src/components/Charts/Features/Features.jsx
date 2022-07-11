import React, { useState } from "react";
import { CardActions, Collapse, IconButton, TableHead } from "@mui/material";
import { Box, Card, CardContent, Typography, Table } from "@mui/material";
import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { green, red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { featureChart, rows } from "./data.js";
import { ExpandMore } from "./styles";

const Features = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 200 }} variant="outlined">
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="button" fontWeight={600}>
              Source / Medium
            </Typography>
          </Box>
          <Box>
            <IconButton aria-label="more-vert">
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: 300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "95%",
            }}
          >
            {featureChart}
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Source</TableCell>
                  <TableCell sx={{ fontWeight: 700 }} align="right">
                    Revenue
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700 }} align="right">
                    Value
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontWeight: 600 }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right" sx={{ color: red[500] }}>
                      {row.value}&nbsp;%
                    </TableCell>
                    <TableCell align="right" sx={{ color: green[500] }}>
                      {row.revenue}&nbsp;%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Features;

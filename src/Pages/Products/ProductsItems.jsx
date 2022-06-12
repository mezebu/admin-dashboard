import React, { useState } from "react";
import { Avatar, Box, Collapse, Divider } from "@mui/material";
import { Grid, IconButton, LinearProgress, Rating } from "@mui/material";
import { TableCell, TableRow, TextField, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ProductsItems = ({ product }) => {
  const SKU = uuidv4();
  const { title, image, rating, price, status, description, category } =
    product;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left">
          <IconButton aria-label="expand row" size="small" onClick={handleOpen}>
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <Avatar
            alt="Remy Sharp"
            src={image}
            sx={{ width: 75, height: 75, mr: 2 }}
            variant="square"
          />
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography variant="body2"> {title}</Typography>
        </TableCell>
        <TableCell align="left">
          <LinearProgress
            variant="determinate"
            value={rating.count}
            color={rating.count < 10 ? "error" : "success"}
            sx={{ borderRadius: 2, height: 7 }}
          />
          <Typography variant="subtitle2">{`${rating.count} in stock`}</Typography>
        </TableCell>
        <TableCell align="center">{Math.round(price)}</TableCell>
        <TableCell align="center">
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 500,
              p: 1,
              borderRadius: 1,
              background:
                status === "Available"
                  ? "rgba(84, 214, 44, 0.16)"
                  : "rgba(255, 72, 66, 0.16)",
              color:
                status === "Available"
                  ? "rgb(34, 154, 22)"
                  : "rgb(183, 33, 54)",
            }}
          >
            {status}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ mt: 2, mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    name="category"
                    label="Category"
                    id="category"
                    autoComplete="category"
                    defaultValue={category}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    id="barcode"
                    label="Barcode"
                    name="barcode"
                    autoComplete="barcode"
                    defaultValue={SKU}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Rating name="read-only" value={rating.rate} readOnly />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    name="description"
                    fullWidth
                    id="description"
                    label="Description"
                    multiline
                    rows={4}
                    autoFocus
                    defaultValue={description}
                  />
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ProductsItems;

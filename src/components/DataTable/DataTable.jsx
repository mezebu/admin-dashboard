import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, IconButton, Stack } from "@mui/material";
import { columns, userRows } from "./data";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DataTable = () => {
  const navigate = useNavigate();

  const actionButtons = [
    {
      field: "actions",
      headerName: "Actions",
      width: 230,
      renderCell: () => {
        return (
          <Stack direction="row" spacing={2}>
            <IconButton
              aria-label="view"
              onClick={() => navigate("/users/test")}
            >
              <VisibilityIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, padding: 5 }}>
      <DataGrid
        rows={userRows}
        columns={columns.concat(actionButtons)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
};

export default DataTable;

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Stack } from "@mui/material";
import { columns, userRows } from "./data";
import DeleteIcon from "@mui/icons-material/Delete";

const DataTable = () => {
  const actionButtons = [
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: () => {
        return (
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="info">
              view
            </Button>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
              delete
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%", padding: 5 }}>
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

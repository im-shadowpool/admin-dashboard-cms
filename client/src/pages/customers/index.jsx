import React from "react";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  console.log(data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Nuumber",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return (
    <Box m={"0.5rem 2rem"}>
      <Header title="Customers" subtitle="List of Customers" />
      <Box
        mt={"20px"}
        height={"75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "$ .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders .MuiDataGrid-topContainer .css-1essi2g-MuiDataGrid-columnHeaderRow":
            {
              backgroundColor: `${theme.palette.background.alt} !important`,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
          // "& .css-1essi2g-MuiDataGrid-columnHeaderRow":{
          //   backgroundColor: theme.palette.background.alt,
          //   color: theme.palette.secondary[100],
          //   borderBottom: "none",
          // }
          ".MuiDataGrid-container--top [role=row]":
            {
              backgroundColor: `${theme.palette.background.alt} !important`,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Customers;

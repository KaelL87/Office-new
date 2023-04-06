/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Box, Chip, Grid, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import DataGridCustomToolbar from '@/components/customDataGrid/DataGridCustomToolbar';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import useSafeState from '@/hooks/useSafeState';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 0.25,
    sortable: true,
  },
  {
    field: 'courses',
    headerName: 'Courses',
    flex: 1,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    flex: 0.5,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.5,
    sortable: false,
    renderCell: params => (
      <Chip
        size="small"
        className={params.value}
        label={params.value}
        sx={{
          color: 'white',
          borderRadius: '5px',
          minWidth: '80px',
          '& .MuiChip-label': {
            position: 'relative',
            top: '1.5px',
            fontSize: '13px',
          },
        }}
      />
    ),
  },
  {
    field: 'date',
    headerName: 'Date',
    flex: 0.5,
  },
];

const rows = [
  {
    id: 1,
    courses: 'NFT(Non Fungible Token) - The Complete Guide (2022 Edition)',
    amount: '$39.99',
    status: 'Processing',
    date: '20th Sept, 2022',
  },
  {
    id: 2,
    courses: 'NFT(Non Fungible Token) - The Complete Guide (2022 Edition)',
    amount: '$39.99',
    status: 'On Hold',
    date: '20th Sept, 2022',
  },
  {
    id: 3,
    courses: 'NFT(Non Fungible Token) - The Complete Guide (2022 Edition)',
    amount: '$39.99',
    status: 'Completed',
    date: '20th Sept, 2022',
  },
  {
    id: 4,
    courses: 'NFT(Non Fungible Token) - The Complete Guide (2022 Edition)',
    amount: '$39.99',
    status: 'Rejected',
    date: '20th Sept, 2022',
  },
  {
    id: 5,
    courses: 'NFT(Non Fungible Token) - The Complete Guide (2022 Edition)',
    amount: '$39.99',
    status: 'Processing',
    date: '20th Sept, 2022',
  },
  {
    id: 6,
    courses: 'NFT(Non Fungible Token) - The Complete Guide (2022 Edition)',
    amount: '$39.99',
    status: 'Cancelled',
    date: '20th Sept, 2022',
  },
  {
    id: 7,
    courses: 'NFT(Non Fungible Token) - The Complete Guide (2022 Edition)',
    amount: '$39.99',
    status: 'Cancelled',
    date: '20th Sept, 2022',
  },
  {
    id: 8,
    courses: 'NFT(Non Fungible Token) - The Complete Guide (2022 Edition)',
    amount: '$39.99',
    status: 'Cancelled',
    date: '20th Sept, 2022',
  },
  {
    id: 9,
    courses: 'NFT(Non Fungible Token) - The Complete Guide (2022 Edition)',
    amount: '$39.99',
    status: 'Cancelled',
    date: '20th Sept, 2022',
  },
];

const Pucharse: React.FC = () => {
  const isMd = useMediaQuery(960);
  const theme = useTheme();
  const [page, setPage] = useSafeState(0);
  const [pageSize, setPageSize] = useSafeState(20);
  const [sort, setSort] = useSafeState({});
  const [search, setSearch] = useSafeState('');

  const [searchInput, setSearchInput] = useSafeState('');
  return (
    <Box
      className="pucharse"
      display="flex"
      flexDirection="column"
      mt={1}
      sx={{
        width: '100%',
        height: 'calc(100vh - 95px)',
        overflow: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Typography variant="h2" whiteSpace={'break-spaces'} fontWeight={600} component="div">
            Purchasing History
          </Typography>
        </Grid>
        <Grid item xs={12} container gap={1}>
          <Box sx={{ height: 400, width: '100%' }}>
            <Box
              height="80vh"
              sx={{
                '& .MuiDataGrid-root': {
                  border: 'none',
                },
                '& .MuiDataGrid-cell': {
                  borderBottom: 'none',
                },
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: 'rgba(117, 183, 244, 0.25)',
                  color: theme.palette.secondary[100],
                  borderBottom: 'none',
                  userSelect: 'none',
                },
                '& .MuiDataGrid-columnHeader': {
                  outline: '0',
                },
                '& .MuiDataGrid-columnHeaderTitle': {
                  borderBottom: 'none',
                  fontWeight: 700,
                  fontSize: '15px',
                },
                '& .MuiDataGrid-virtualScroller': {
                  backgroundColor: 'white',
                  fontSize: '14px',
                },
                '& .MuiDataGrid-footerContainer': {
                  backgroundColor: 'white',
                  color: theme.palette.secondary[100],
                  borderTop: 'none',
                },
                '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                  color: `${theme.palette.secondary[200]} !important`,
                },
              }}
            >
              <DataGrid
                loading={false}
                getRowId={row => row.id}
                rows={rows}
                columns={columns}
                rowCount={rows.length}
                rowsPerPageOptions={[20, 50, 100]}
                pagination
                page={page}
                pageSize={pageSize}
                paginationMode="server"
                sortingMode="server"
                onPageChange={newPage => setPage(newPage)}
                onPageSizeChange={newPageSize => setPageSize(newPageSize)}
                onSortModelChange={newSortModel => setSort(newSortModel)}
                components={{ Toolbar: DataGridCustomToolbar }}
                componentsProps={{
                  toolbar: { searchInput, setSearchInput, setSearch },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pucharse;

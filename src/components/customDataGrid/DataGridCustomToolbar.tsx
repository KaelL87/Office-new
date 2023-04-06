/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Search } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GridToolbarContainer } from '@mui/x-data-grid';

const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const DataGridCustomToolbar: React.FC<{ searchInput: any; setSearchInput: any; setSearch: any }> =
  ({ searchInput, setSearchInput, setSearch }) => {
    return (
      <GridToolbarContainer>
        <FlexBetween width="100%">
          <FlexBetween />
          <TextField
            label="Search..."
            sx={{ mb: '0.5rem', width: '15rem' }}
            onChange={e => setSearchInput(e.target.value)}
            value={searchInput}
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setSearch(searchInput);
                      setSearchInput('');
                    }}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FlexBetween>
      </GridToolbarContainer>
    );
  };

export default DataGridCustomToolbar;

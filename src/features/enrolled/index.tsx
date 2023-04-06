import React from 'react';

import { Box, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import useSafeState from '@/hooks/useSafeState';

import CardCourse from '../../components/Cards/CardCourse/CardCourse';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '3px',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    color: 'grey',
    '&.Mui-selected': {
      color: 'black',
      fontWeight: 600,
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

const Enrolled: React.FC = () => {
  const [value, setValue] = useSafeState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className="enrolled" display="flex" flexDirection="column">
      <Grid container mt={1} gap={2}>
        <Grid item xs={12}>
          <Typography variant="h2" whiteSpace={'break-spaces'} fontWeight={600} component="div">
            Enrolled Courses
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
              <StyledTab label="All Courses" />
              <StyledTab label="Active Courses" />
              <StyledTab label="Completed" />
            </StyledTabs>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {value === 0 && (
            <Stack spacing={2}>
              <Box>
                <CardCourse />
              </Box>
              <Box>
                <CardCourse />
              </Box>
              <Box>
                <CardCourse />
              </Box>
            </Stack>
          )}
          {value === 1 && 2}
          {value === 2 && 3}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Enrolled;

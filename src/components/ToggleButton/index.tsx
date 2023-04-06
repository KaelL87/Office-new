/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import useSafeState from '@/hooks/useSafeState';

const ToggleButton: React.FC<{
  change: any;
  options: any[];
  styles?: any;
}> = ({ options, styles, change }) => {
  const [value, setValue] = useSafeState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    change(options[newValue].value);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        allowScrollButtonsMobile
        scrollButtons="auto"
      >
        {options.map((x: any) => (
          <Tab
            label={x.displayName}
            key={x.value}
            style={{ color: 'white', textTransform: 'none', fontSize: '16px', fontWeight: 700 }}
          />
        ))}
      </Tabs>
    </>
  );
};
export default ToggleButton;

import React from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Calculator from './Calculator';
import MultiplyButtons from './MultiplyButtons';

function TabMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </AppBar>
    <Box value={value} index={0}>
      <Calculator />
    </Box>
    <Box value={value} index={1}>
      <MultiplyButtons />
    </Box>
    <Box value={value} index={2}>
      Item Three
    </Box>
    </>
  );
}

export default TabMenu;

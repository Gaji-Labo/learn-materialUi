import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

function Buttons() {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const handleButtonClick = () => {
    setValue1(!value1);
  };
  const handleButtonClick2 = () => {
    setValue2(!value2);
  };
  const handleButtonClick3 = () => {
    setValue3(!value3);
  };
  return (
    <div>
      <Box color="text.primary">
      <Button variant="contained" onClick={handleButtonClick} disabled={value3}>
        Default
      </Button>
      </Box>
      <Container maxWidth="sm"className={classes.margin} >
      <Button variant="contained" color="primary" onClick={handleButtonClick2} disabled={value1}>
        Primary
      </Button>
      </Container>
      <Button variant="contained" color="secondary" onClick={handleButtonClick3} disabled={value2}>
        Secondary
      </Button>
    </div>
  );
}

export default Buttons;

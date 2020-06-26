import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function MultiplyButtons() {
  const [buttons, setButtons] = useState(["Button"]);
  const handleButtonClick = () => {
    setButtons([...buttons, "Button"]);
  };
  return (
    <Container>
      <Grid container spacing={1} justify="space-between">
        {buttons.map((button, index) => (
          <>
            <Grid container item xs={2}>
              <Button
                key={index}
                variant="contained"
                onClick={handleButtonClick}
              >
                Default
              </Button>
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  );
}

export default MultiplyButtons;

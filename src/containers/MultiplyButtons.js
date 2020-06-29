import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function MultiplyButtons() {
  const [buttons, setButtons] = useState(["Button"]);
  const handleButtonClick = () => {
    let number = Math.floor(Math.random() * 2);
    let components = ["Button", "Button2"];
    setButtons([...buttons, components[number]]);
  };
  return (
    <Container>
      <Grid container spacing={1} justify="space-between">
        {buttons.map((button, index) => (
          <>
            <Grid container item xs={2}>
              {button === "Button" && (
                <Button
                  key={index}
                  variant="contained"
                  onClick={handleButtonClick}
                >
                  Default
                </Button>
              )}
              {button === "Button2" && (
                <Button
                  key={index}
                  variant="contained"
                  color="primary"
                  onClick={handleButtonClick}
                >
                  Default
                </Button>
              )}
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  );
}

export default MultiplyButtons;

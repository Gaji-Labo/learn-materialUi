import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";

function MultiplyButtons({ multiply, dispatch_multiply }) {
  console.log(multiply);
  return (
    <Container>
      <Grid container spacing={1} justify="space-between">
        {multiply.buttons.map((button, index) => (
          <>
          <Grid container item xs={2}>
            {button === "Button" && (
              <Button
                key={index}
                variant="contained"
                onClick={dispatch_multiply}
              >
                Default
              </Button>
            )}
            {button === "Button2" && (
              <Button
                key={index}
                variant="contained"
                color="primary"
                onClick={dispatch_multiply}
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

// proptypes
MultiplyButtons.propTypes = {
  multiply: PropTypes.object.isRequired,
  dispatch_multiply: PropTypes.func.isRequired
};

export default MultiplyButtons;

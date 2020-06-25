import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function Buttons() {
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
      <Button variant="contained" onClick={handleButtonClick} disabled={value3}>
        Default
      </Button>
      <Button variant="contained" color="primary" onClick={handleButtonClick2} disabled={value1}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" onClick={handleButtonClick3} disabled={value2}>
        Secondary
      </Button>
    </div>
  );
}

export default Buttons;

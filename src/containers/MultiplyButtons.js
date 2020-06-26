import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function MultiplyButtons() {
  const [buttons, setButtons] = useState(["Button"]);
  const handleButtonClick = () => {
    setButtons([...buttons, "Button"]);
  };
  return (
    <div>
      {buttons.map((button, index) => (
        <>
          <Button key={index} variant="contained" onClick={handleButtonClick}>
            Default
          </Button>
        </>
      ))}
    </div>
  );
}

export default MultiplyButtons;

import React from "react";
import Button from "./Button";

function Clear({ handleClearData }) {
  return (
    <Button
      text="Clear Data"
      className="clear_button"
      onClick={handleClearData}
    ></Button>
  );
}

export default Clear;

import React from "react";

const OperatorButton = ({op}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
        {op}
      </button>
    </>
  );
};

export default OperatorButton;
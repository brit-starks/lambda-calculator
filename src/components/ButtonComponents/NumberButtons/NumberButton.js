import React from "react";
import '../../../App.css';

const NumberButton = ({num}) => {

  return (
      //  Display a button element rendering the data being passed down from the parent container on props 
    <div>
      <button className='number-btns'>
        {num}
      </button>
    </div>
  );
};

export default NumberButton;

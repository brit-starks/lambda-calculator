import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from './NumberButton';

import '../../../App.css';

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [calNumbers, setCalNumbers] = useState(numbers);

  return (
    <div className='number-container'>
      {/* {calNumbers.map((num)=> console.log(num))} */}
      {calNumbers.map( (num, index) => {
        return (
          <NumberButton num={num} key={index}/>
        )}
      )}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {/* numbers.map( num => <NumberButton number={numbers.numbers}/>) */}
    </div>
  );
};

export default Numbers;

import React from "react";
import { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data/data";

//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  // console.log('numberData');
  const [numbers, setNumbers] = useState();
  console.log('Numbers.js > useState: ', numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      numbers.map( num => <NumberButton number={numbers.numbers}/>)
    </div>
  );
};

export default Numbers;

import React from "react";
import  data from '../../../data/data';

const numbers = data.numbers;

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  console.log(numbers);
  // STEP 2 - add the imported data to state
  const [numbers, setNumbers] = useState();
  console.log('Numbers.js > useState: ', setNumbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       numbers.map(numbers => {});
    </div>
  );
};

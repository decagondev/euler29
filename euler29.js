// project euler 29 solution by Tom Tarpey
// tried this problem without bigint and it gave me a false number due to the number system
// so i am importing the bigInt imlementation.
// npm install big.js --save
// from https://github.com/MikeMcl/big.js/
// my implementation formula is x^y for 2 ≤ x ≤ 100 and 2 ≤ y ≤ 100

// usage:
// npm install
// node ./euler29.js

// import the big.js module
let Big = require("big.js");
getNumberOfDistinctPowers = function(maximum) {
  // setting minmum number of 2
  let minimumNumber = 2;

  // setting the maximum number
  let maximumNumber = maximum;

  // create empty set to hold the numbers
  let numberSet = {};

  // setup the x and y variables
  let x, y;

  // nested for loop the itterate over the problem
  // using the Big() constructor and using methods .lte() less than or equal to  .plus() bigint plus opperator, .pow() bigint power operator
  for (x = new Big(minimumNumber); x.lte(maximumNumber); x = x.plus(1)) {
    for (y = minimumNumber; y <= maximumNumber; y++) {
      numberSet[x.pow(y).toString()] = true; // set each valid index to true;
    }
  }
  return Object.keys(numberSet).length; // get the array of property names of numberSet and return the length of that array
};


// testing

console.log(getNumberOfDistinctPowers(5)) // --> 15

console.log(getNumberOfDistinctPowers(100)) // --> 9183

// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function modulo(a, b) {
  // return the remainder of the division a / b

  return a % b;
}

function squareRoot(n) {
  // return the square root of n

  return Math.sqrt(n);
}

function raiseToPower(m, n) {
  // return the result of raising m to the nth power

  return Math.pow(m, n);
}

function formatMoney(amount) {
  /*
   * return a the amount formatted into pounds sterling
   * Amounts should be a string with the £ symbol in front
   * formatMoney(2.33) => "£2.33"
   * Amounts should be rounded to 2 decimal numbers
   * formatMoney(2.338) => "£2.34"
   * Amounts should always have 2 decimal numbers even if they are zeroes
   * formatMoney(1) => "£1.00"
   */

  return '£' + amount.toFixed(2);
}

function calculateCircleArea(r) {
  // return the area of a circle with radius r
  // round result to 3 decimal numbers

  let areaOfCircle = Math.PI * r * r;
  areaOfCircle = parseFloat( areaOfCircle.toFixed(3) );

  return areaOfCircle;
}

function calculateFullTurns(degrees) {
  // return the number of full turns you can make with the provided degrees
  // 1 full turn === 360 degrees

  return Math.floor(degrees / 360);
}

function findSmallestAndBiggest(arr) {
  // given an array, return a new array containing the smallest and biggest values of the original array.

  let smallAndBig = [arr[0], arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallAndBig[0]) {
      smallAndBig[0] = arr[i];
      continue;
    }

    if (arr[i] > smallAndBig[1]) {
      smallAndBig[1] = arr[i];
    }
  }

  return smallAndBig;
}

function splitTheBeans(totalCost, numOfPeople) {
  /* 
  
  The Northcoders staff have gone for a coffee run and they are all bad at maths. 
  
  You are given the total cost of the coffee order (in pounds) and the number of people the cost needs to be split between.

  Return the cost per person.

  Note: The Northcoders staff only have whole pound coins. So the cost per person needs to be to the nearest pound coin (we'll give it as a tip!).

  */

  return Math.ceil(totalCost / numOfPeople);
}

// ---------- Do not change the code below this line --------------
module.exports = {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
  findSmallestAndBiggest,
  splitTheBeans,
};

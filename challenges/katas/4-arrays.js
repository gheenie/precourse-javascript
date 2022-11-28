// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getEvenNumbers(nums) {
  //return an array of only the even numbers in the given array

  let evenNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) continue;

    evenNums.push(nums[i]);
  }

  return evenNums;
}

function getItemsLongerThan(array, len) {
  //return an array of only the items longer than the given length

  let longerItems = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length <= len) continue;

    longerItems.push(array[i]);
  }

  return longerItems;
}

function getLastItems(array, n) {
  // return an array with the 'n' last items of 'array'
  
  return array.slice(array.length - n);
}

function getSandwichFilling(sandwich) {
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich

  sandwich.pop();
  sandwich.shift();

  return sandwich;
}

function removeItem(array, n) {
  // return a new array without the item on position 'n', effectively removing it from the array

  let headOfArray = [];
  let tailOfArray = [];

  for (let i = 0; i < n; i++) {
    headOfArray.push(array[i]);

    if (i === array.length - 1) break;
  }

  for (let i = n + 1; i < array.length; i++) {
    tailOfArray.push(array[i]);
  }

  return headOfArray.concat(tailOfArray);
}

function mergeArrays(arr1, arr2) {
  // return a new array with all the elements of arr1 followed by all the elements of arr2

  return arr1.concat(arr2);
}

function flattenArrayByOne(arrayOfArrays) {
  /* given a nested array or arrays, return a new array with one less level of nesting. All the elements of all the original nested arrays must be kept in their original order
  for example: [[1],[2],[[3,4]]] => [1,2,[3,4]]
  */

  let flattened = [];

  for (let i = 0; i < arrayOfArrays.length; i++) {
    for (let j = 0; j < arrayOfArrays[i].length; j++) {
      flattened.push(arrayOfArrays[i][j]);
    }
  }

  return flattened;
}

function isItemOmnipresent(arrayOfArrays, item) {
  // return true if the passed item is present in all the arrays inside arrayOfArrays

  for (let i = 0; i < arrayOfArrays.length; i++) {
    for (let j = 0; j < arrayOfArrays[i].length; j++) {
      if (arrayOfArrays[i][j] === item) break;

      // Reached the end of j array and last element is still !== item.
      if (j === arrayOfArrays[i].length - 1) return false;
    }
  }

  return true;
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  getItemsLongerThan,
  getLastItems,
  getSandwichFilling,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
};

// Activity-1 : Array Creation and Access

// Task-1: Create an array of numbers from 1 to 5 and log the array to the console.

let numArray = [1, 2, 3, 4, 5];
console.log(numArray);

// Task-2 Access the first and last elements of the array and log them to the console.

console.log(`First element ${numArray[0]} and last element ${numArray[4]}.`);

// Activity-2: Array Methods (Basic)

// Task-3: Use the push method to add a new number to the end of the array and log the updated array.

let newArray = numArray.push(6);
console.log(numArray);

// Task-4: Use the pop method to remove the last element from the array and log the updated array.

let updatedArray = numArray.pop(6);
console.log(numArray);

// Task-5: Use shift method to remove the furst element from the array and log the updated array.

let shiftedArray = numArray.shift();
console.log(numArray);

// Task-6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

let unshiftedArray = numArray.unshift(1);
console.log(numArray);

// Activity-3: Array Methods (Intermediate)

// Task-7 Use the map method to create a new array where each number is doubled and log the new array.

let doubledArray = numArray.map((double) => double * 2);
console.log(doubledArray);

// Task-8: Use the filter method to create a new array with only even numbers and log the new array.

let evenValue = numArray.filter((even) => even % 2 === 0);
console.log(evenValue);

// Task-9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const initialValue = 0;
const sumWithInitial = numArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

// Activity-4: Array Iteration

// Task-10: Use a for loop to iterate over the array and log each element to the console.

function logValues(numArray) {
  for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
  }
  console.log('')
}

logValues(numArray);


// Task-11: Use the foreach method to iterate over the array and log each element to the console.
numArray.forEach((element) => console.log(element));


// Activity-5: Multi-dimensional Arrays

// Task-12: Create a two-dimensional array (matrix) and log the entire array to the console.

let twoDArray = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

console.table(twoDArray);

// Task-13: Access and log a specific element from the two-dimensional array.

console.log(twoDArray[0][3])
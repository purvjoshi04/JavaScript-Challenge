// Functions

// Activity-1: Function Declaration

// Task-1: Write a function to check if a number is even or odd and log the result to the console.

function findNum(num) {
  if (num % 2 == 0) {
    return `${num} is even.`;
  } else {
    return `${num} is odd.`;
  }
}

console.log(findNum(2));

// Task-2: Write function to calculate the square of a number and return the result.

function numSquare(num) {
  return `The square of ${num} is ${num * num}.`;
}
console.log(numSquare(2));
console.log(numSquare(4));

// Activity-2: Function Expression

// Task-3: Write a function expression to find the maximum of two numbers and log the result to the console.

const maxNum =  function (numOne, numTwo) {
    if (numOne > numTwo) {
        return `The maximum number is ${numOne}.`
    }else {
        return `The maximum number is ${numTwo}.`
    }
}
console.log(maxNum(1,3));

// Task-4: Write a function expression to concatenate two strings and return the result.

const concateStr = function (oneStr, twoStr) {
    return `${oneStr + twoStr}`
} 
console.log(concateStr("Hello ", "World"));

// Activity-3: Arrow Functions

// Task-5: Write an arrow function to calculate the sum of two numbers and return the result.

sumNun = (one, two) => {
    return `The sum of two number is ${one + two}.`
}
console.log(sumNun(20,10));

// Task-6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let vowels = ['a', 'e', 'i', 'o', 'u'];

findChar = (str) => {
  return vowels.some(vowel => str.toLowerCase().includes(vowel))
}
console.log(findChar('Hello'))


// Activity-4: Function Parameters and Default Values

// Task-7: Write a function that takes two paramters and retunrs their product. Provide a default value for the seconde parameter.
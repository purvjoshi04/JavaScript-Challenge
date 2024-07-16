// Activity-1: For Loop

// Task-1: Write a program to print numbers from 1 to 10 using aa for loop.

let count = 10;
for (let i = 1; i <= count; i++) {
  console.log(i);
}

// Task-2: Write a program to print the multiplication table of 5 using a for loop.
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// Activity-2: While loop

// Task-3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let number = 1;
while (number <= 10) {
  sum += number;
  number++;
}

console.log("The sum of numbers from 1 to 10 is:", sum);

// Task-4: Write a program to print numbers from 10 to 1 using a while loop..

let nums = 10;
while (nums >= 1) {
  console.log(nums);
  nums--;
}

// Activity-3: Do....While Loop

// Task-5: Write a program to print numbers from 1 to 5 using a do....while loop.

let firstNum = 1;
console.log(" ");
do {
  console.log(firstNum);
  firstNum++;
} while (firstNum <= 5);

// Task-6: Write a program to calculate the factorial of anumber using a do....While loop.

function findFactorial(number) {
  console.log("");
  if (number < 0) {
    return "Factorial is not defined for negative numbers.";
  }

  let factorial = 1;
  let i = 1;

  do {
    factorial *= i;
    i++;
  } while (i <= number);
  return factorial;
}

console.log(findFactorial(10));
console.log(findFactorial(3));

// Activity-4: Nested Loops

// Task-7: Write a program to print a pattern using nested for loops.

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
return;

// Activity-5: Loop control Statements

// Task-8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task-9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 0; i < 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

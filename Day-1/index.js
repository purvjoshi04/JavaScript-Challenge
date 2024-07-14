// Activity 1 : Variable Declaration

// Task-1 : Declare a variable using var, assign it a number, and log the value to the console.

var num = 30;
console.log(num);

// Task-2 : Declare a variable using let, assign it a string, and log the value to the console.

let str = "Hello World";
console.log(str);

// Activity 2 : Constant Declaration

// Task-3 : Declare a variable using const, assign it a boolen value, and log the value to the console.

let bool = true;
console.log(bool);

// Activity 3 : Data Types

// Task-4 : Create variables of different data types (number, string, boolean,  object, array) and log each variable's type using the typeof operator.

let num1 = 21;
let str1 = "Hello again!";
let bool1 = false;
let obj = {
    name: "John",
    email: "john123@gmail.com",
}
let array = [1,2,3,4,5,6];

console.log(typeof(num1));
console.log(typeof(str1));
console.log(typeof(bool1));
console.log(typeof(obj));
console.log(array instanceof Array);

// Activity 4 : Reassigning Variables

// Task-5 : Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let userName = "John";
userName = "Alex";
console.log(userName);
console.log(userName);

// Activity 5 : Understanding `const`

// Task-6 : Try reassigning a variable declared with const and observe the error.

const newUser = "Ravi";
newUser = "Virat Kohli"
console.log(newUser);

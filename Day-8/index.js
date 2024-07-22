// ES6+ Features

// Activity-1: Template Literrals

// Task-1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const personName = "John";
const personAge = 28;
console.log(`${personName} age is ${personAge}.`);

// Task-2: Create a multi-line string using template literals and log it to the console.

const strOne = "India";

const strTwo = `The ${strOne} is largest democrate country where many languages are speak. ${strOne} is known for its rich cultural heritage.`;

console.log(strTwo);

// Activity-2: Destructuring

// Task-3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numArray = [1, 2, 3, 4, 5];
console.log(
  `The first element of array is ${numArray[0]} and second element is ${numArray[1]}.`
);

// Task-4: Use object destructuring to extract the title and  author from a book object and log the, to the console.

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2016,
};
console.log(`The title of book object is ${book.title}.`);

// Activity-3: Spread and Rest Operators

// Task-5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const arrayOne = [1, 2, 3, 4];
const arrayTwo = [...arrayOne, 5, 6, 7, 8];
console.log(arrayTwo);

// Task-6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result. 

function sumNums(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNums(1,2,3,4));

// Activity-4: Default Parameters

// Task-7: Write a function that takes two paramters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function numProduct (numOne, numTwo = 1) {
    return numOne * numTwo
}

console.log(numProduct(2));
console.log(numProduct(3, 4));

// Activity-5: Enhanced Object Literals

// Task-8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const name = 'John';
const age = 31;

const person = {
    name,
    age,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    },
    [ name + 's Age']: age
};

console.log(person);

// Task-9: Create an object with computed property names based on variables and log the object to the console.

const prefix = 'user';
const id = 42;
const firstName = 'John';
const lastName = 'Doe';

const user ={
    [`${prefix}Id`]: id,
    [`${prefix}FirstName`]: firstName,
    [`${prefix}LastName`]: lastName,
    [`getFullName`]() {
        return `${this[`${prefix}FirstName`]} ${this[`${prefix}LastName`]}`;
    }
};

console.log(user)
console.log(user.getFullName())
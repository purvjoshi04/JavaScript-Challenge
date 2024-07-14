// Activity 1 : Arithmetic Operations

// Task-1: Write a program to add two numbers and log the result to the console.
// Task-2: Write a program to subtract two numbers and log the result to the console.
// Task-3: Write a program to multiply two numbers and log the result to the console.
// Task-4: Write a program to divide two numbers and log the result to the console.
// Task-5: Write a program to find the remainder when one number is divided by another and log the result to the console.
function arithmetic() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const operator = prompt("Enter the operator (+, -, *, /, %):");
    const num2 = parseFloat(prompt("Enter the second number:"));
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return 'Cannot divide by zero!';
            }
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return 'Invalid operator!';
    }

    return result;
}

// let result = arithmetic();
// console.log(result);

// Activity 2 : Assignment Operators

// Task-6: Use the += operators to add a number to a variable and log the result to the console.

// let num1 = 20;
// let num2 = 30;

// let newResult = num1 += num2;

// console.log(newResult);

// Task-6: Use the += operators to add a number to a variable and log the result to the console.

// let subResult = num1 -= num2;
// console.log(subResult);

// Activity-3: Comparison Operators

// Task-8: Write a program to compare two numbers using > and < and log the resukt to the console.
// let number1 = 10
// let number2 = 5;

// function bigNum(a, b) {

//     if (a > b) {
//         return a;
//     } else if (a < b) {
//         return b;
//     } else {
//         return "Can not find bigger number!"
//     }
// }

// let obj = bigNum(number1, number2);
// console.log(obj);

// Task-9 write a program to compare two numbers using >= and <= and log the result to the console.

// let one = 5;
// let two = 5;

// function orEqual (a,b) {
//     if ( a >= b ) {
//         return true;
//     }else if ( a <= b) {
//         return true
//     }else {
//         return false
//     }
// }

// let equal = orEqual(one, two);
// console.log(equal);

// Task-10: Write a program to compare two numbers using == and === and log the result to the console.

// let numOne = 20;
// let numTwo = 20;

// function equalTo (a,b) {
//     if (a==b || a===b){
//         return true
//     }else {
//         return false;
//     }
// }

// let objOne = equalTo(numOne, numTwo);
// console.log(objOne);

// Activity-4: Logical Operators

// Task-11:  Write a program that uses the && operatore to combine two conditions and log the result to the console.

let positiveNum = 10;
let negativeNum = -1;

console.log(positiveNum > 0 && negativeNum > 0);

// Task-12:  Write a program that uses the || operatore to combine two conditions and log the result to the console.
function orOperator(a, b) {
    if (a > 0 || b < 0) {
        return true;
    }
}

console.log(orOperator(positiveNum, negativeNum));

// Task-11:  Write a program that uses the ! operatore to negate a conditions and log the result to the console.

let isRaining = false;
console.log("Is it not raining: ", !isRaining);

// Activity-5 Ternary Operator

// Task-14:  Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let number = 10;
console.log(number > 0 ? "Number is Positive" : number < 0 ? "Number is Negative" : "Number is Zero");
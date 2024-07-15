// Activity-1: if-else Statements

// Task-1: Write a program to check if a number is positive, negative or zero, and log the result to the console.

function numberCheck (num) {
    if ( num > 0 ) {
        return `${num} is positive`
    }else if ( num < 0) {
        return `${num} is negative`
    }else {
        return `${num} is zero`
    }
}

console.log(numberCheck(0));
console.log(numberCheck(1));
console.log(numberCheck(-1));

// Task-2 Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function voteAge (age) {
    if (age >= 18) {
        return "You are eligible to vote."
    }else {
        return "You are not eligible to vote."
    }
}

console.log(voteAge(19));
console.log(voteAge(10));

// Activity-2: Nested if-else statements 

// Task-3: Write a program to find the largest of three numbers using nested if-else statements

function largestNum(num1, num2, num3) {
    if (num1 >= num2) {
        if (num1 >= num3) {
            return `${num1} is the largest among three numbers.`;
        } else {
            return `${num3} is the largest among three numbers.`;
        }
    } else {
        if (num2 >= num3) {
            return `${num2} is the largest among three numbers.`;
        } else {
            return `${num3} is the largest among three numbers.`;
        }
    }
}

console.log(largestNum(10, 2, 1));
console.log(largestNum(10, 50, 2));
console.log(largestNum(2, 1, 100));

// Activity-3 Switch Case:

// Task-4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function dayOfWeek (dayInNum) {

    switch (dayInNum) {
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        case 7:
            return 'Sunday';
            break;

    }
}

console.log(dayOfWeek(1));
console.log(dayOfWeek(2));
console.log(dayOfWeek(3));
console.log(dayOfWeek(4));
console.log(dayOfWeek(5));
console.log(dayOfWeek(6));
console.log(dayOfWeek(7));

// Task-5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

function assignGrade(score) {
    let grade;

    switch (true) {
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score >= 70:
            grade = 'C';
            break;
        case score >= 60:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    console.log(`Score: ${score}, Grade: ${grade}`);
}

assignGrade(95);
assignGrade(82);
assignGrade(76);
assignGrade(65);
assignGrade(55);

// Activity-4: Conditional (Ternary) Operator

// Task-6: Write a program that uses the ternary operator to check if a number is evem or odd and log the result to the console.

function evenOrOdd (num) {
    return num % 2 == 0 ? `${num} is Even.` : `${num} is odd.`;
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(3));


// Activity-5: Combining Conditions

// Task-7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

function leapYear (year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`
    }else {
        return `${year} is not a leap year.`
    }
}

console.log(leapYear(4000));
console.log(leapYear(2024));
console.log(leapYear(2026));
console.log(leapYear(100));
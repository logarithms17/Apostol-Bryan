// script.js

// Activity: Exploring Common JS Built-in Methods

// Objective: Practice using common JS built-in methods to perform various operations.

// Instructions:
// 1. Create an HTML file with a heading that says "Common JS Built-in Methods".
// 2. Create a JavaScript file and link it to the HTML file.
// 3. In the JavaScript file, you will find comments describing different tasks that need to be performed using common JS built-in methods. Your task is to write the code to complete these tasks.
// 4. The tasks to be completed are as follows:
//    a. Calculate the square root of a given number.
//    b. Generate a random number between 1 and 10.
//    c. Convert a string representation of a number to an actual number.
//    d. Check if a value is not a number.
//    e. Convert a number to a string.

// Note: Read the comments carefully to understand the requirements for each task. Use the appropriate method to accomplish the given task.

// Good luck!

// Your code implementation goes here:

// Calculate the square root of a given number

const squareRoot = Math.sqrt(9);
console.log(squareRoot);


// Generate a random number between 1 and 10

const randomNumber = Math.floor((Math.random() *10) + 1)
console.log(randomNumber)


// Convert a string representation of a number to an actual number

const stringNumber = "5"
const number = parseInt(stringNumber)
console.log(number)


// Check if a value is not a number

function isNotNumber(value) {
  return typeof value !== 'number' || isNaN(Number(value));
}

console.log(isNotNumber('hello'))


// Convert a number to a string

const numberToString = 5
const string = numberToString.toString()
console.log(string)
// script.js

// Step 1: Create a function expression named greet and assign it an anonymous function that logs a greeting message to the console.

// Step 2: Call the greet function.

// Step 3: Create a function expression named add and assign it an anonymous function that takes two parameters and returns their sum.

// Step 4: Call the add function with the arguments 5 and 3, and store the result in a variable named sum.


// Step 5: Log the value of the sum variable to the console.


// Step 6: Create a function expression named multiply and assign it an anonymous function that takes two parameters and returns their product.

// Step 7: Call the multiply function with the arguments 4 and 2, and store the result in a variable named product.


// Step 8: Log the value of the product variable to the console.


// Step 9: Create a function expression named isEven and assign it an anonymous function that takes a number as a parameter and returns true if it's even, false otherwise.


// Step 10: Call the isEven function with the argument 6 and store the result in a variable named even.


// Step 11: Log the value of the even variable to the console.


// Step 12: Create a function expression named square and assign it an anonymous function that takes a number as a parameter and returns its square.


// Step 13: Call the square function with the argument 3 and store the result in a variable named squaredValue.


// Step 14: Log the value of the squaredValue variable to the console.


// Step 15: Create a function expression named fullName and assign it an anonymous function that takes two parameters (firstName and lastName) and returns the full name as a string.


// Step 16: Call the fullName function with the arguments 'John' and 'Doe', and store the result in a variable named name.


// Step 17: Log the value of the name variable to the console.


// Step 18: Create a function expression named capitalize and assign it an anonymous function that takes a string as a parameter and returns the capitalized version of the string.


// Step 19: Call the capitalize function with the argument 'javascript' and store the result in a variable named capitalizedString.


// Step 20: Log the value of the capitalizedString variable to the console.

//STEP 1

const greet = () => console.log("Step 1: Hello, world!");

//STEP 2
greet()

//STEP 3

const add = (a, b) => a + b;

//STEP 4

const sum = add(5, 3);

//STEP 5
console.log(sum);

//STEP 6

const multiply = (a, b) => a * b;

//STEP 7

const product = multiply(4, 2);

//STEP 8

console.log(product);

//STEP 9

const isEven = (num) => num % 2 === 0;

//STEP 10

const even = isEven(6);

//STEP 11

console.log(even);

//STEP 12

const square = (num) => num * num;

//STEP 13

const squaredValue = square(3);

//STEP 14

console.log(squaredValue);

//STEP 15

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

//STEP 16

const name = fullName("John", "Doe");

//STEP 17

console.log(name);

//STEP 18

const capitalize = (str) => str.toUpperCase();

//STEP 19

const capitalizedString = capitalize("javascript");

//STEP 20

console.log(capitalizedString);
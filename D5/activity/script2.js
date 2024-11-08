// Activity 2: Print Numbers in a Range

// D5
//  - activity folder
//      act2.html
//      script2.js


// Create a JavaScript program that prints all the numbers between a given range. Prompt the user to enter the starting and ending numbers for the range. Use a loop to iterate through the numbers in the range. Print each number in the console.

const number = prompt("Enter the starting number: ");
const number2 = prompt("Enter the ending number: ");
for (let i = number; i <= number2; i++) {
    console.log(i);
}
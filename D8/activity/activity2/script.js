// script2.js

// Activity: Exploring ES6 Features

// Objective: Practice using ES6 features to enhance your JavaScript code.

// Instructions:
// 1. Create an HTML file with a heading that says "ES6 Features".
// 2. Create a JavaScript file and link it to the HTML file.
// 3. In the JavaScript file, you will find comments describing different tasks that need to be performed using ES6 features. Your task is to write the code to complete these tasks.
// 4. The tasks to be completed are as follows:
//    a. Use arrow functions to calculate the square of a given number and log the result to the console.
//    b. Use template literals to create a welcome message that includes the name and age of a person.
//    c. Use destructuring to extract the first and last name from a person object and log them to the console.
//    d. Use the spread operator to merge two arrays into a single array.
//    e. Use default parameters to create a function that calculates the area of a rectangle. If no arguments are provided, assume a default length and width of 1.
//    f. Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

// Note: Read the comments carefully to understand the requirements for each task. Use the appropriate ES6 features to accomplish the given task.

// Good luck!

// Your code implementation goes here:

// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.

const square = (number) => number * number;
console.log(square(3));


// Task 2: Use template literals to create a welcome message that includes the name and age of a person.

const person = { name: "John", age: 30 };
const welcomeMessage = `Welcome, ${person.name}! You are ${person.age} years old`
console.log(welcomeMessage);


// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.

const person1 = { firstName: "John", lastName: "Doe" };

const { firstName, lastName } = person1;
console.log(firstName); // Output: "John"
console.log(lastName); // Output: "Doe"


// Task 4: Use the spread operator to merge two arrays into a single array.

const array1 = [10, 20, 30];
const array2 = [40, 50, 60];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);


// Task 5: Use default parameters to create a function that calculates the area of a rectangle.

const calculateArea = (length = 1, width = 1) => length * width;
console.log(calculateArea())
console.log(calculateArea(5, 3));


// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

class Person {
    constructor(name, age) {
        this.name = name;   
        this.age = age;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person2 = new Person("John", 30);
person2.introduce();

console.log(person2)
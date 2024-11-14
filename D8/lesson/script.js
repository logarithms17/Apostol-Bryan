//Destructuring - Extract Values from Arrays and Objects

//Destructuring allows you to quickly unpack values from arrays or objects into separate variables, making it easier to work with complex data structures.

const numbers = [1, 2, 3, 4, 5];

// Extracting values from an array
const [first, second, ...rest] = numbers;         

console.log(first); // Output: 1    
console.log(second); // Output: 2    
console.log(rest); // Output: [3, 4, 5]

/*
Spread and Rest Operators - Gather and Spread Values
The spread and rest operators (...) look the same but serve different purposes based on where they are used.
*/

const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];

// Spread Operator - Combining two arrays
const combinedArray = [...arr1, ...arr2]; // Output: [1, 2, 3, 4, 5, 6]

console.log(combinedArray)

// Default Parameters - Set Default Values for Function Arguments

const calculatedArea = (length = 1, width = 1) => length * width;       
console.log(calculatedArea()); // Output: 1
console.log(calculatedArea(4, 3)); // Output: 12
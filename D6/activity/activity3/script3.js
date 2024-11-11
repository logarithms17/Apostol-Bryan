// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.

//STEP 1

function isEven(number) {
    if (number % 2 == 0) {
        return true
    } else {
        return false
    }
}
  

//STEP 2

for (let i = 0; i <= 10; i++) {
    console.log(isEven(i))
}

//STEP 3

function multiply(num1, num2) {
    return num1 * num2
}

//STEP 4

let num1 = 0
let num2 = 0

// while (num1 >= 0 && num2 >= 0) {
    // num1 = parseInt(prompt("Enter the first number: "))
    // num2 = parseInt(prompt("Enter the second number: "))
    // console.log(multiply(num1, num2))
// }

//STEP 5
function reverseString(str) {
    return str === str.split("").reverse().join("")
}
  
//STEP 6
let str = 'hello'
console.log(reverseString(str))

//STEP 7

function countVowels(str) {
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++
        }
    }

    return count
}

//STEP 8

console.log(countVowels('JavaScript'))

//STEP 9

const findMax = (arr) => {
    return Math.max(...arr)
}

//STEP 10

console.log(findMax([4, 9, 2, 7, 5]))

//STEP 11

const calculateFactorial = (num) => {
    if (num === 0 || num === 1) {
        return 1
    } else {
        return num * calculateFactorial(num - 1)
    }
}

//STEP 12

console.log(calculateFactorial(5))

//STEP 13

const isPalindrome = (str) => {
    return str === str.split("").reverse().join("")
}

//STEP 14

console.log(isPalindrome('level'))

//STEP 15

const sumArray = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0)
}

//STEP 16

console.log(sumArray([1, 2, 3, 4, 5]))

//STEP 17

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

//STEP 18

console.log(capitalizeFirstLetter('javascript'))

//STEP 19

const filterEvenNumbers = (arr) => {
    return arr.filter(num => num % 2 === 0)
}

//STEP 20

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
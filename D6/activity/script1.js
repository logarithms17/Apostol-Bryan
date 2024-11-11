// Step 1: Create an array called 'students' with three objects representing student information.

// Each student object should have properties: 'name', 'age', and 'grade'.

// Step 2: Access the name of the second student in the 'students' array and log it to the console.

// Step 3: Add a new student object to the 'students' array.
// The new student should have properties: 'name', 'age', and 'grade'.

// Step 4: Loop through the 'students' array and log each student's name and grade to the console.

// Step 5: Create an object called 'book' with properties 'title', 'author', and 'year'.

// Step 6: Access the title of the 'book' object and log it to the console.

// Step 7: Update the 'year' property of the 'book' object to 1930.

// Step 8: Create a method called 'getSummary' for the 'book' object.
// The method should return a string summarizing the book's title, author, and year.

// Step 9: Call the 'getSummary' method of the 'book' object and log the result to the console.

// Step 10: Create an array called 'library' and add the 'book' object to it.

// Step 11: Log the 'library' array to the console to verify the book is stored in the array.

// Step 12: Create an object called 'car' with properties 'brand', 'model', and 'year'.

// Step 13: Access the 'model' property of the 'car' object and log it to the console.

// Step 14: Update the 'year' property of the 'car' object to 2023.

// Step 15: Create a method called 'startEngine' for the 'car' object.
// The method should log a message to the console indicating that the car's engine is starting.

// Step 16: Call the 'startEngine' method of the 'car' object.

// Step 17: Create an array called 'garage' and add the 'car' object to it.

// Step 18: Log the 'garage' array to the console to verify the car is stored in the array.

// Step 19: Create an object called 'person' with properties 'name', 'age', and 'city'.

// Step 20: Access the 'age' property of the 'person' object and log it to the console.

// Feel free to add more steps or customize the activity according to your needs.


//STEP 1

const students = [
    {
        name: "John",
        age: 20,
        grade: "A"
    },
    {
        name: "Jane",
        age: 21,
        grade: "B"
    },
    {
        name: "Bob",
        age: 22,
        grade: "C"
    }
]


//STEP 2

console.log(`Step 2: ${students[1].name}`)

//STEP 3

students.push({
    name: "Mary",
    age: 23,
    grade: "D"
})



//STEP 4

students.forEach(student => console.log(student.name, student.grade))

//STEP 5

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}

//STEP 6

console.log(`Step 6: ${book.title}`)

//STEP 7

book.year = 1930

//STEP 8

book.getSummary = () => {
    return `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`
}

//STEP 9

console.log(`Step 9: ${book.getSummary()}`)

//STEP 10

const library = [book]

//STEP 11
console.log("Step 11:")
{ library.forEach(data => console.log(data)) }

//STEP 12

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
}

//STEP 13

console.log(`Step 13: ${car.model}`)

//STEP 14

car.year = 2023

//STEP 15

car.startEngine = () => {
    console.log("Step 15: The car's engine is starting.")
}

//STEP 16

car.startEngine()

//STEP 17

const garage = [car]

//STEP 18

console.log("Step 18:")
{ garage.forEach(data => console.log(data)) }

//STEP 19

const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

//STEP 20

console.log(`Step 20: ${person.age}`)

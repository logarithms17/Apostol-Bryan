// Activity 1: Grade Calculator

// D5
//  - activity folder
//      act1.html
//      script1.html
     
// In this activity, the user is prompted to enter a score. Based on the score entered, the code uses conditional statements (if, else if, and else) to determine the corresponding grade. If the score is 90 or above, it assigns the grade 'A'. If the score is between 80 and 89, it assigns the grade 'B'. If the score is between 70 and 79, it assigns the grade 'C'. If the score is between 60 and 69, it assigns the grade 'D'. Otherwise, if the score is below 60, it assigns the grade 'F'. The grade is then printed to the console.


// Prompt the user to enter a score
// Get the user's score
// If the score is between 90 and 100, assign the grade 'A'
// If the score is between 80 and 89, assign the grade 'B'
// If the score is between 70 and 79, assign the grade 'C'
// If the score is between 60 and 69, assign the grade 'D'
// Otherwise, if the score is below 60, assign the grade 'F'
// Print the grade to the console

const studentScore = prompt("Enter your score: ");

let grade

if (studentScore >= 90) {
    grade = "A"
} else if (studentScore >= 80 && studentScore <= 89) {
    grade = "B"
} else if (studentScore >= 70 && studentScore <= 79) {
    grade = "C"
} else if (studentScore >= 60 && studentScore <= 69) {
    grade = "D"
} else {
    grade = "F"
}

console.log(`Your grade is ${grade}`)
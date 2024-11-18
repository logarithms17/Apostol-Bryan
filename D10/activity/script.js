// Activity 1: JS OOP
// In this activity, you will create a Library Management System using JavaScript OOP concepts such as encapsulation, inheritance, and polymorphism. The system will allow users to add books to the library, search for books, and display the list of available books.
// Instructions:

// Create a class called Book with the following properties:
// Title (string)
// Author (string)
// Genre (string)
// Availability (boolean)
// Implement methods in the Book class:
// borrowBook(): This method should set the availability of the book to false if the book is available to borrow.
// returnBook(): This method should set the availability of the book to true if the book is returned.
// displayInfo(): This method should display the information of the book (title, author, genre, availability).
// Create a class called Library that will act as the main system. The Library class should have the following properties and methods:
// Property: books (array) - to store the list of books in the library.
// Method: addBook(title, author, genre): This method should create a new Book object and add it to the books array.
// Method: searchBook(title): This method should search for a book by title and display its information if found.
// Method: displayBooks(): This method should display the list of all available books in the library.
// Test your Library Management System by performing the following actions:
// Create an instance of the Library class.
// Use the addBook() method to add several books to the library.
// Use the searchBook() method to search for a specific book and display its information.
// Use the displayBooks() method to display the list of available books in the library.

class Book {
    constructor(title, author, genre, availability) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.availability = availability;
    }

    borrowBook() {
        this.availability = false;
    }

    returnBook() {
        this.availability = true
    }

    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Availability: ${this.availability}`)
    }
}

class Library {
    constructor() {
        this.books = []
    }

    addBook(title, author, genre) {
        const book = new Book(title, author, genre, true)
        this.books.push(book)
    }

    searchBook(title) {
        const book = this.books.find(book => book.title === title)
        if (book) {
            book.displayInfo()
        } else {
            console.log("Book not found")
        }
    }

    displayBooks() {
        this.books.forEach(book => {
            if (book.availability) {
                book.displayInfo()
            }
        })
    }
}

const library = new Library()

library.addBook("Book 1", "Author 1", "Genre 1")
library.addBook("Book 2", "Author 2", "Genre 2")
library.addBook("Book 3", "Author 3", "Genre 3")

library.searchBook("Book 2")

library.displayBooks()
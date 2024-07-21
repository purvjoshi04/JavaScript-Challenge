// Objects

// Activity-1: Object Creation and Access

// Task-1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
};
console.log(book);

// Task-2: Access and log the title and author properties of the book object.

console.log(`Title: ${book.title} and author: ${book.author}.`);

// Activity-2: Object Methods

// Task-3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.bookInfo = function () {
  console.log(`Title: ${book.title} and Author: ${book.author}.`);
};
book.bookInfo();

// Task-4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function (year) {
  this.year = year;
};

book.updateYear(2023);
console.log(book);

// Activity-3: Nested Objects

// Task-5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name: 'Public Library',
    books: [
        {
            bookName: 'Atomic Habits',
            auhtor: 'James Clear',
            year: 2018
        },
        {
            bookName: 'The subtle art of not giving f*ck',
            author: 'Mark Manson',
            year: 2016
        },
        {
            bookName: 'Do It Today',
            author: 'Darius Foroux',
            year: 2011
        }
    ]
};

console.log(library);

// Task-6: Access and log the name of the library and the titles of all the books in the library.

console.log('Library name: ', library.name);

console.log('Books Titels:');
library.books.forEach(book => {
    console.log(book.bookName)
});

// Activity-4: The this keyword

// Task-7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

// Already done in task-4

book.updateYear(2021);
console.log(book);

// Activity-5: Object Iteration

// Task-8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (let i = 0; i < library.books.length; i++) {
    console.log(`Book ${i + 1}:`);
    for (let property in library.books[i]) {
        console.log(`${property}: ${library.books[i][property]}`);
    }
    console.log()
}

// Task-9: Use object.keys and object.values methods to log all the keys and values of the book object.

library.books.forEach((book, index) => {
    console.log(`Book ${index + 1}`);

    console.log("Keys:");
    console.log(Object.keys(book));

    console.log("Values");
    console.log(Object.values(book));

    console.log()
})
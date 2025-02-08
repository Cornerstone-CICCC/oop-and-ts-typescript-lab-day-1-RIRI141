"use strict";
// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["Fantasy"] = 0] = "Fantasy";
    // add 4 more
    BookGenre[BookGenre["Horror"] = 1] = "Horror";
    BookGenre[BookGenre["History"] = 2] = "History";
    BookGenre[BookGenre["Recipe"] = 3] = "Recipe";
    BookGenre[BookGenre["Mystery"] = 4] = "Mystery";
})(BookGenre || (BookGenre = {}));
const library = [];
function addBook(bookId, title, author, genre) {
    const book = {
        bookId,
        title,
        author,
        genre,
        isAvailable: true,
    };
    library.push(book);
    return book;
}
function borrowBook(bookId) {
    const book = library.find((book) => book.bookId === book.bookId);
    if (!book) {
        return "Book is not found";
    }
    book.isAvailable = false;
    return `${book.title} has been borrowed`;
}
function returnBook(bookId) {
    const book = library.find((book) => book.bookId === book.bookId);
    if (!book) {
        return "Book is not found";
    }
    book.isAvailable = true;
    return `${book.title} has been returned`;
}
function checkAvailability(bookId) {
    const book = library.find((book) => book.bookId === book.bookId);
    if (!(book === null || book === void 0 ? void 0 : book.isAvailable)) {
        return false;
    }
    return true;
}
function removeBook(bookId) {
    const book = library.find((book) => book.bookId === book.bookId);
    if (!book) {
        return "Book not found";
    }
    return `${book.title} has been removed from the library`;
}
// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"

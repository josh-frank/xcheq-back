const booksController = require( "../controllers" ).books;
const usersController = require( "../controllers" ).users;

module.exports = app => {
   // User routes //
   app.get( "/users/:userId", usersController.show );
   // Book routes //
   app.get( "/books/:bookId", booksController.show );
};
const Book = require( "../models" ).Book;

exports.show = ( request, response ) => {
    return Book.findByPk( request.params.bookId, {} )
        .then( book => {
            if ( !book ) { response.status( 404 ).send( { error: "Book not found" } ) }
            else { response.status( 200 ).send( book ); }
        } )
        .catch()
};
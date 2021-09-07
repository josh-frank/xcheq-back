const User = require('../models').User;
const Book = require('../models').Book;

const userOptions = {
    include: [
      {
        model: Book,
        as: "books",
        attributes: [ "id", "name", "currency", "createdAt", "updatedAt" ],
      }
    ]
};

exports.show = ( request, response ) => {
   return User.findByPk( request.params.userId, userOptions )
        .then( user => {
            if ( !user ) { response.status( 404 ).send( { error: "User not found" } ); }
            else { response.status( 200 ).send( user ); }
        } )
        .catch( error => response.status( 400 ).send( error ) );
};

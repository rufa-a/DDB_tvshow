show dbs;

use admin;

db.createUser( {
      user: "rufa",
      pwd: "rufa",
      roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
} );

// use tvshow;

// db.createCollection( "tvshowNames", {
//     validator: { $jsonSchema: {
//        bsonType: "object",
//        required: [ "name" ],
//        properties: {
//           name: {
//              bsonType: "string",
//              description: "must be a string and is required"
//           }
//        }
//     } }
// } );


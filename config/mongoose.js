//require the library
const mongoose=require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/my_todo_app');

//acquire the connection(to check if its successful)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,"Error in connecting to MongoDB"));

//up and running then print the message
db.once ('open',function(){
   console.log('Connected to Database:MongoDB');
});

//exporting the database
module.exports=db;
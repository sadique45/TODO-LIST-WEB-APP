//express for setting up the express server
const express=require('express');

//use express
const app=express();

//port number
const port=9000;

//importing the database
const db=require('./config/mongoose');

//importing Schema
const List=require('./models/list');

//home controller
const homeController=require('./controllers/home');

//list controller
const listController=require('./controllers/list');
 
//to use encrypted data
app.use(express.urlencoded());   

// using static files
app.use(express.static("./views"));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

//creating the routes
app.get('/',homeController.home);
 
app.post('/create-list',listController.create);

app.get('/delete-list',listController.destroy);
 
 
// make the app to listen on asigned port number
app.listen(port,function(err){

    if(err)
    {
        console.log(`error in the running server: ${err}`);
    }
    console.log(`server is up and running on port: ${port}`);
});

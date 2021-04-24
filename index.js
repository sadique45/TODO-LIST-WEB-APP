//express for setting up the express server
const express=require('express');

//use express
const app=express();

//port number
const port=8000;

//make the app to listen at this port number
app.listen(port,function(err){

    if(err)
    {
        console.log(`error in the running server: ${err}`);
    }
    console.log(`server is up and running on port: ${port}`);
});

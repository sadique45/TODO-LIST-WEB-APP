//require library
const mongoose=require('mongoose');

//creating Schema 
const listSchema=new mongoose.Schema({

    description: {
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        required: true
    }
});

const List=mongoose.model('List',listSchema);

//exporting the Schema
module.exports=List;
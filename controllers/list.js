const List=require('../models/list');

//creating the controller
module.exports.create=function(req,res){
    List.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,post){
        if(err){
            console.log('Error',err);
            return;
        }
        return res.redirect('back');
    });
}


//creating the delete controller

module.exports.destroy=function(req,res){

      //get the id from query
      var id=req.query;
    
      //checking the number of task to delete
      var count=Object.keys(id).length;
      for(let i=0;i<count;i++){
  
          //finding and deleting the task from the DB one by one by id
          List.findByIdAndDelete(Object.keys(id)[i],function(err){
              if(err){
                  console.log("Error in deleting task");
              }
  
          })
      }
      return res.redirect('back');
}
//creating the home controllers

const List=require('../models/list')

module.exports.home=function(req,res){
    List.find(function(err,list){
        return res.render('home',{
            title:'TO DO APP',
            list:list
        });
    });
}
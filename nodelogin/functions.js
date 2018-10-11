var express = require('express');
var app = express();

var func1 = function(req,res,next){
    res.send("Hello world function 1!")
    next();
}

var func2 = function(req,res,next){
    console.log("Hello world function 2!")
    next();
}

var func3 = function(req,res,next){
    console.log("Hello world function 3!")
    next();
}

app.get("/",func1,func2,func3)

app.listen(8700,function(req,res){

    console.log("Server started..")

});


var express = require('express');
var app = express();
var session = require('express-session');


app.use(session({
    secret:"kiran",saveUninitialized:true,resave:true

}))

req.session.var=username;
username = req.session.username;
req.session.distroy();


var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));


app.get("/",function(req,res){
res.sendfile("./login.html");
    
 })
 app.post("/home",function(req,res){

   

    if(!req.session.username == "kiran" && !req.session.password == "123"){
        
        

            res.render("/login.html");
        
       
    }
    else if(req.session.username == "kiran" && req.session.password == "123")
    {
             
            res.render(__dirname+"/home.html");
      
    }
    else(req.session.username == "kiran" && req.session.password == "123"
    )
 })



app.listen(8600,function(req,res){

    console.log("Server started...!")
});
var express = require('express');
var app = express();
var bodyparser = require("body-parser");
var session = require('express-session');


app.get("/",function(req,res){
    res.sendfile("./login.html");
        
})

app.use(session({

    secret:"Akhil",saveUninitialized:true,resave:true
}))


app.use(bodyparser.urlencoded({extended:false}));



 app.post("/login",function(req,res){

   if( req.session.password == "123"){

    req.session.user=req.body.uname;
    console.log("welcome"+req.session.user);
   res.redirect("/home");

  }
})
        
app.get("/home",function(req,res){

    res.sendfile("index.html");
})
app.get("/logout",function(req,res){
    
      req.session.destroy();
      res.redirect("/");

  })  

       
    
    




app.listen(8600,function(req,res){

    console.log("Server started...!")
});
var express = require('express');
var app = express();
var session = require('express-session');
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));


app.use(session({
    secret: "kiran", saveUninitialized: true, resave: true

}))


app.get("/", function (req, res) {
    res.sendfile("./login.html");

})

app.post("/login",function(req,res){
    if(req.session.username !==null){

        req.session.username= req.body.username;
        
        res.redirect("/home");
    }
})

function auth(req,res,next){
    if(!req.session.username){
        res.redirect("/")
    }
else{
    next();
}
}

app.get("/home", auth, function(req,res){
    console.log("Welcome"+req.session.username);
    res.sendfile("./home.html")
})


app.get("/logout", function(req,res){
    res.session.destroy();
    res.redirect("/");
})





app.listen(8600, function (req, res) {

    console.log("Server started...!")
});
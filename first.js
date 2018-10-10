var express = require('express');
var app = express();
var empl = require("./routes/emploroute")
var stud = require("./routes/studroute")


app.get("/",function(req,res){
    res.sendfile("./home.html")
    
})

app.use("/employee", empl);
app.use("/student", stud);



app.listen(7800,function(req,res){
    console.log("Server is statring..")
    console.log("Server has started.")
})



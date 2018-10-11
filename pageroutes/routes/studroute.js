var express = require('express');
var router = express.Router();


router.get("/",function(req,res){
    res.sendfile("./student.html")
    
})

router.get("/nstu",function(req,res){
    res.sendfile("./nestu.html")
    
})

router.get("/estu",function(req,res){
    res.sendfile("./edstu.html")
    
})

router.get("/rstu",function(req,res){
    res.sendfile("./remstu.html")
    
})

module.exports = router;


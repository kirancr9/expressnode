var express = require('express');
var router = express.Router();


router.get("/",function(req,res){
    res.sendfile("./employee.html")
    
})

router.get("/nemplo",function(req,res){
    res.sendfile("./nemplo.html")
    
})

router.get("/eemplo",function(req,res){
    res.sendfile("./edemplo.html")
    
})

router.get("/remplo",function(req,res){
    res.sendfile("./rememplo.html")
    
})

module.exports = router;
const express = require("express");
const { builtinModules } = require("module");
const router = express.Router();

router.get("/signup",async function(req,res){
 
    res.render("signup");

})

router.get("/login",async function(req,res){
 
    res.render("login");

})

module.exports = router;
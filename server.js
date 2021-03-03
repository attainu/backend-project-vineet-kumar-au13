const express = require("express");
const app = express();
const path = require('path');
const ejs = require("ejs");
const Router = require("./routes/router");
const PORT = process.env.PORT || 7000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, 'public')));


// Router Middleware 
app.use("/",Router);

app.listen(PORT,function(){

    console.log(`Server i running at ${PORT}`)
})
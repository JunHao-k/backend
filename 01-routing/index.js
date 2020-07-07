//import express
const express =  require('express');
/* CREATE EXPRESS APP */
let app = express();

/* SET THE VIEW ENGINE */
app.set('view engine' , 'hbs');

//import hbs
const hbs = require('hbs')



/* ROUTES */
// add a function for the root route
app.get('/' , function(req,res){
    //res is short for response
    //res.send("<h1>Welcome to my world</h1>");
    res.render('index')
})

app.get('/hello' , function(req,res){
    res.send("<h1>Hello World!</h1>")
})

app.listen(3000, ()=>{
    console.log("Server started")
})
//Server JS file
//Dependancies

const express = require('express');
const path = require('path');
const app = express();
var BABYLON = require('babylonjs')
if(BABYLON){
  console.log("Hey!")
}
//Setting up a view engine
app.set('view engine', 'ejs');

//Setting up static file
app.use('/static', express.static(path.join(__dirname, 'public')));

//Home page
app.get('/', function(req, res) {
    res.render('index')
  });

//Start a server
app.listen(3000, function() {
    console.log('listening on 3000')
  });
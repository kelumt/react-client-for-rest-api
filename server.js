var express = require('express');
var cors = require('cors');

//Create the Application
var app = express();
app.use(cors());
app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});

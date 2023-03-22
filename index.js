const express = require("express");
const cookieParser=require('cookie-parser');

const app = express();
const port = 8000;
const db =require('./config/mongoose');
// add assets file

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'))

// get Layouts library
const expressLayouts= require('express-ejs-layouts');
app.use(expressLayouts);

// extract style and script from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts',true);

 // Use express router
 app.use('/', require('./routes'));

 // setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the Server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});

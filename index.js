const express = require("express");

const app = express();
const port = 8000;
 
// get Layouts library
const expressLayouts= require('express-ejs-layouts');
app.use(expressLayouts);

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

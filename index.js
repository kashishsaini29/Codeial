const express = require("express");
const cookieParser=require('cookie-parser');

const app = express();
const port = 8000;
const expressLayouts= require('express-ejs-layouts');
const db =require('./config/mongoose');
// used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal= require('./config/passport-local-strategy');
const MongoStore = require("connect-mongo")(session);
// add assets file
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'))

// get Layouts library
app.use(expressLayouts);

// extract style and script from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts',true);

//  // Use express router
//  app.use('/', require('./routes'));

 // setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store the session cookie in the db
app.use(session({
     name:'codeial',
     // TODO change the secret deployment before production mode
     secret:'blhaSomething',
     saveUninitialized:false,
     resave:false,
     cookie:{
        maxAge:(1000*60*100)
     },
     store:new MongoStore(
      {    
            mongooseConnection:db,
            autoRremove:'disable'    
     },
     function(err){
           console.log(err || 'connect mongodb setup ok');
     }
     )
    }));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


  // Use express router
 app.use('/', require('./routes'));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the Server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});

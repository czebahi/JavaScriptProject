// Our dotenv
require('dotenv').config();

// Connecting to MongoDB cluster with Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  auth: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  useNewUrlParser: true
}).catch(err => console.error(`ERROR: ${err}`));

// Our imported libraries
const express = require('express');

// Assigning Express to an app contstant
const app = express();

// Adding cookies and sessions support to our app
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

app.use(cookieParser());
app.use(session({
  secret: (process.env.secret || 'boorakacha'),
  cookie: {
    max: 10800000
  },
  resave: true,
  saveUnitialized: true
}));

// This maintains our home path
const path = require('path');

// Body parser which will make reading request bodies MUCH easier
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(flash());
app.use((req, res, next)=>{
  res.locals.flash = res.locals.flash || {};
  res.locals.flash.success = req.flash('success') || null;
  res.locals.flash.error = req.flash('error') || null;

  next();
});


// Our authentication helper
const jwt = require('jsonwebtoken');
const isAuthenticated = req => {
  const token = 
  (req.cookies && req.cookies.token) || 
  (req.body && req.body.token) || 
  (req.query && req.query.token) ||
  (req.headers && req.headers["x-access-token"]);

  if(req.session.userId) return true;

  if(!token) return false;

  jwt.verify(token, "bobthebuilder", function (err, decoded){
    if(err) return false;
    return true;
  });
};

app.use((req, res, next) => {
  req.isAuthenticated = () => {
    if(!isAuthenticated(req)){
      req.flash('error', 'You are not permitted to do this action');
      res.redirect('/');
    }
  }
  
  res.locals.isAuthenticated = isAuthenticated(req);
  next();
});

//Our routes
const routes = require('./routes.js');

app.use('/api', routes);

// Handles any requests that don't match the ones above
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on ${port}`));
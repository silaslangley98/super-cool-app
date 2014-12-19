// MODULES

var express			= require('express');
var session      	= require('express-session');
var fs          	= require('fs');
var path        	= require('path');
var mongoose    	= require('mongoose');
var bodyParser		= require('body-parser');
var cookieParser	= require('cookie-parser');
var logger			= require('morgan');
var bcrypt			= require('bcrypt-nodejs');
var uriUtil      	= require('mongodb-uri');
var http         	= require('http');
var passport     = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app 			= express();

//set port 

var port = process.env.PORT || 9001;

// set up database connection
var mongodbUri = 'mongodb://coder:geek@ds063870.mongolab.com:63870/super-cool-data';		
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
mongoose.connect(mongooseUri);

// REGISTER MODOULES
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

app.use(passport.initialize());                               
app.use(passport.session());
app.use(function(req, res, next) {
    if (req.user) {
        res.cookie('user', JSON.stringify(req.user));
    }
    next();
});


// ROUTES

require('./app/routes.js')(app);

// START APP
app.listen(port); // at http://localhost: 9001

// INFORM USER
console.log("Magic happens at " + port);

// EXPOSE APP

exports = module.exports = app;
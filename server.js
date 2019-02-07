
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');


/// ejs for header footer include

var ejs = require('ejs'); 
ejs.open = '{{'; 
ejs.close = '}}';
app.engine('html', require('ejs').renderFile); 

// using cookie and session

app.use(cookieParser());

app.use(session({secret : "This is top secret session key session key of my website", saveUninitialized : false, resave: false}));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname + '/html'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/html'));
app.use(bodyParser.json());



// controller router file ...

app.use('/', require("./controller/restapi/router"));

// creating server

var server = app.listen(6001, function() { 

      console.log('Listening locally on port %d', server.address().port);

      var adr = 'http://localhost:'+server.address().port;
      console.log('Browser Addr', adr);
}); 
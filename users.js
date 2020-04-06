
//The route defines a callback that will be invoked whenever an HTTP GET request with the correct pattern is detected. The matching pattern is the route specified when the module is imported ('/users') plus whatever is defined in this file ('/'). In other words, the first get call will be used when a URL of /users/ is received.

var express = require('express');
var router = express.Router(); //loads express module and gets an express.Router object

/* GET users listing. */
router.get('/', function(req, res, next) { //One thing of interest above is that the callback function has the third argument 'next',                                               and is hence a middleware function rather than a simple route callback. While the code                                                 doesn't currently use the next argument, it may be useful in the future if you want to add                                             multiple route handlers to the '/' route path.
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send("You're so cool!");
});

module.exports = router; //exported, to be used in app.js

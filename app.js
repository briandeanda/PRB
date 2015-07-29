var express = require('express');
var app = express();
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var port = process.env.PORT || 8080;

app.set('port', port);

app.use(passport.initialize());
app.use(passport.session());

app.listen(app.get('port'), function() {
    console.log('Server started on localhost: ' + app.get('port'));
});

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World2!');
});

module.exports = app;


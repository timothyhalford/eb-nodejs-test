var express = require('express');
var db = require('./db');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World2!');
});

app.get('/data', function(req, res) {
	res.send(JSON.stringify(db.getAll()));
});

module.exports = app;


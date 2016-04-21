var app = require("./index");

app.listen(8081, function() {
	console.log('Listening on port 3000');
	console.log('env: ');
	console.log(process.env);
});


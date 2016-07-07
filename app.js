var express = require('express');
var app = new express();

app.get('/', function(req, res) {
	res.send('kittens!');
});

app.listen(3000, function () {
	console.log('Listening on port 3000');
});

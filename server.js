// Require express module
var express = require('express');
// Initialize express app
var app = express();

// Static files - public folder where we have our html, css, etc..
app.use(express.static(__dirname + '/public'));

// routes
app.get('/contactlist', function(req, res) {
	console.log('I received a GET request');
	
	person1 = {
		name: 'Tim',
		email: 'tim@tim.com',
		number: '222-222-2222'
	};

	person2 = {
		name: 'Emily',
		email: 'emily@tim.com',
		number: '333-222-2222'
	};

	person3 = {
		name: 'Jogn',
		email: 'jogh@tim.com',
		number: '222-222-2222'
	};

	var contactlist = [person1, person2, person3];
	res.json(contactlist);
})

app.listen(3000);
console.log('Server running on port 3000');


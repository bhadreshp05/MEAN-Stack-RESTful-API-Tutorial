// Require express module
var express = require('express');
// Require mongojs module
var mongojs = require('mongojs');
// Require body parser module
var bodyParser = require('body-parser');
// Initialize express app
var app = express();
// Get local mongo db and collection name
var db = mongojs('meanStackRestfulContactlist', ['meanStackRestfulContactlist']);


// Static files - public folder where we have our html, css, etc..
app.use(express.static(__dirname + '/public'));

// Body parser middleware
app.use(bodyParser.json());

// routes
// Get contactlist
app.get('/contactlist', function(req, res) {
	console.log('I received a GET request');

	db.meanStackRestfulContactlist.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

// Post contactlist data
app.post('/contactlist', function(req, res) {
	console.log(req.body);
	db.meanStackRestfulContactlist.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

// Delete contact from contactlist
app.delete('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.meanStackRestfulContactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

// Edit contact
app.get('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.meanStackRestfulContactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});

});

// Update contact
app.put('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	db.meanStackRestfulContactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
		new: true}, function(err, doc) {
			res.json(doc)
		});
});

app.listen(3000);
console.log('Server running on port 3000');


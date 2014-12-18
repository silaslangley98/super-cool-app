module.exports = function(app) {

	var mongoose = require('mongoose');

	var router = require('express').Router();

	require('./models/Users.js');
	require('./models/Features.js');
	require('./models/Comments.js');

	//SERVER ROUTES

	router.route('/users')

		.get(function(req, res) {

			mongoose.model('Users').find(req.query, function(err, users) {

				if (err) 
					res.send(err);

				res.send(users);
			});
		});

	router.route('/comments')

		.get(function(req, res) {

			mongoose.model('Comments').find(req.query, function(err, comments) {

				if (err) 
					res.send(err);

				res.send(comments);
			});
		});

	router.route('/features')

		.get(function(req, res) {

			mongoose.model('Features').find(req.query, function(err, features) {

				if (err) 
					res.send(err);

				res.send(features);
			});
		});

	// FRONT END ROUTES

	app.use('/api', router);

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
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
		})

		.post(function(req, res) {

            mongoose.model('Users').create(req.body, function(err, product) {

                if(err) res.send(err);

                res.send(product);
            });

        });

    router.route('/Users/:id')
        .get(function(req, res) {
            // use mongoose to get a product in the database by id
            mongoose.model('Users').findOne({id: req.params.id}, function(err, product) {
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.send(product); // return the product in JSON format
            });
        })

        .post(function(req, res) {

            mongoose.model('Users').findByIdAndUpdate(req.params.id, req.body, function(err, product) {
                if(err) res.send(err);

                res.send(product);
            });
        });


	router.route('/comments')

		.get(function(req, res) {

			mongoose.model('Comments').find(req.query, function(err, comments) {

				if (err) 
					res.send(err);

				res.send(comments);
			});
		})

		.post(function(req, res) {

            mongoose.model('Comments').create(req.body, function(err, product) {

                if(err) res.send(err);

                res.send(product);
            });

        });

	
	router.route('/Comments/:id')
        .get(function(req, res) {
            // use mongoose to get a product in the database by id
            mongoose.model('Comments').findOne({id: req.params.id}, function(err, product) {
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.send(product); // return the product in JSON format
            });
        })

        .post(function(req, res) {

            mongoose.model('Comments').findByIdAndUpdate(req.params.id, req.body, function(err, product) {
                if(err) res.send(err);

                res.send(product);
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

    // logout API route
    router.route('/logout')
        .get(function(req, res, next) {
            req.logout();
            res.send(200);
        });

    // login API route
    router.route('/login')
        .post(passport.authenticate('local'), function(req, res) {
            if (req.isAuthenticated()) {
                res.cookie('user', JSON.stringify(req.user));
                res.send(req.user);
            }
        });

	// FRONT END ROUTES

	app.use('/api', router);

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
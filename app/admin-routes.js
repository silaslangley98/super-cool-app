module.exports = function(app) {

    // Require mongoose dependency
    var mongoose = require('mongoose');

    /* Add the dependency to passport after the mongoose require decleration */
    var passport = require('passport');

    /* Add the dependency to Stripe */
    var stripe   = require('stripe')('sk_test_MPZw5Of5EjrfHaAM789HgPUc');

    // Create a new instance of the Express 4 router

    var router = require('express').Router();

    var User = mongoose.model('User');

    var Feature = mongoose.model('Feature');


    function checkRole(role) {
        return function(req, res, next) {
             //if (req.user.isAdmin == true
            if (req.user && req.user[role]) {
                next();
            } else {
                res.send(401, "Unauthorized");
            }
        }
    }

    /* ======================= REST ROUTES ====================== */
    // Handle API calls

    router.route('/*')
        .all(checkRole('isAdmin'));

    // Products API route
    router.route('/features')
        .get(function(req, res) {
            var filter = {
                isActive: true
            };

            
            Feature.find(filter, function(err, features) { 
                         if (err)
                    res.send(err);

                res.send(features); // return products in JSON format
            });
        })
        .post(function(req, res) {

            Feature.create(req.body, function(err, feature) {

                if(err) res.send(err);

                res.send(features);
            });

        });

    router.route('/features/:id')
        .get(function(req, res) {

            Feature.findOne({id: req.params.id}, function(err, product) {
                
                if (err)
                    res.send(err);

                res.send(product); 
            });
        })

        .post(function(req, res) {

            Feature.findByIdAndUpdate(req.params.id, req.body, function(err, feature) {
                if(err) res.send(err);

                res.send(features);
            });
        })
               
        .delete(function(req, res) {

            Feature.findByIdAndRemove(req.params.id, function(err, response) {
                if(err) res.send(err);

                res.send(response);
            });

        });


    router.route('/users')
        .get(function(req, res) {
        

            User.find(req.query, function(err, users) {
                
                if (err) res.send(err);

                res.send(users);
            });
        })
        .post(function(req, res) {

            User.create(req.body, function(err, user) {

                if(err) res.send(err);

                res.send(user);
            });

        });

    router.route('/users/:id')
        .get(function(req, res) {

            User.findOne({_id: req.params.id}, function(err, user) {
                if (err) {res.send(err)};

                res.send(user);
            });
        })
        .post(function(req, res) {

            User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
                if(err) res.send(err);

                res.send(user);
            });
        })
              
        .delete(function(req, res) {

            User.findByIdAndRemove(req.params.id, function(err, response) {
                if(err) res.send(err);

                res.send(response);
            });

        });

    app.use('/api/admin', router);
  
};
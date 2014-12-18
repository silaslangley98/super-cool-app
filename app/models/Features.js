var mongoose = require('mongoose');

var featuresSchema = new mongoose.Schema({
    name: String,
	upVotes: Number,
	downVotes: Number,
	total: Number
});

var Features = mongoose.model('Features', featuresSchema);

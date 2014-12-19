var mongoose = require('mongoose');

var featuresSchema = new mongoose.Schema({
    name: String,
	upVotes: Number,
	downVotes: Number,
	total: Number,
	state: String
});

var Features = mongoose.model('Features', featuresSchema);

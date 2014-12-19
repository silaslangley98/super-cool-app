var mongoose = require('mongoose');

var commentsSchema = new mongoose.Schema({
	feature: String,
    submitter: String,
	comment: String
});

var Comments = mongoose.model('Comments', commentsSchema);

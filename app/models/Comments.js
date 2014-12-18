var mongoose = require('mongoose');

var commentsSchema = new mongoose.Schema({
    submitter: String,
	comment: String
});

var Comments = mongoose.model('Comments', commentsSchema);

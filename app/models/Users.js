var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
   	firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    hasVoted: {
    	facebook: Boolean,
    	twitter: Boolean,
    	comments: Boolean,
    	weather: Boolean,
    	profile: Boolean
    }
});

var User = mongoose.model('User', userSchema);
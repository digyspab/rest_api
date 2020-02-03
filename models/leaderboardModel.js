const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
	player: {
		type: String, 
		required: 'Please enter a name'
	},

	score: {
		type: Number,
		required: 'Please enter a score'
	},

	registered: {
		type: String,
		default: 'No'
	}
});

module.exports = mongoose.model("Entry", EntrySchema, "Leaderboard");
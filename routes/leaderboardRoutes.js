module.exports = app => {
	let leaderboard = require('../controllers//leaderboardController.js');

	app
		.route('/entries')
		.get(leaderboard.read_entries)
		.post(leaderboard.create_entry);

	app
		.route('entries/:entryId')
		.get(leaderboard.read_entry)
		.put(leaderboard.update_entry)
		.delete(leaderboard.delete_entry);
};


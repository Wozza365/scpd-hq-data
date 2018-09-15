var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();

var ranks = require('./enums/ranks');
var events = require('./enums/events');
var users = require("./enums/users");

app.use('/api/db', require('./controllers/dbController'));
app.use('/api/player', require('./controllers/playerController'));


app.use(logger('dev'));
app.use(express.json());

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.get('/test', (req, res) => {
	res.send({
		"Discord Ranks": ranks.DISCORD_RANKS.enums,
		"Racer Ranks": ranks.RACER_RANKS.enums,
		"Police Ranks": ranks.POLICE_RANKS.enums,
		"Multiplayer Events": events.EVENTS_MP,
		"Singleplayer Events": events.EVENTS_SP,
		"Default Users": users.DEFAULT_USERS
	});
});

module.exports = app;
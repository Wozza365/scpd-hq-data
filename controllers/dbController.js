var mongo = require('mongodb').MongoClient;

// db controller routes
var express = require('express');
var router = express.Router();

// enums
var users = require("../enums/users");
var ranks = require("../enums/ranks");
var events = require("../enums/events");
var eventTimes = require("../enums/eventTimes");

// helpers
var dbUri = require('../helpers/db').dbUri;
var keys = require("../helpers/enum-help").keys;
var len = require("../helpers/enum-help").length;
var log = require("../helpers/db").log;

router.put('/ranks', (req, res) => {
	mongo.connect(dbUri, (err, client) => {
		const db = client.db("model");
		
		db.collection("rank.discord").insertMany(keys(ranks.DISCORD_RANKS), log);
		db.collection("rank.racer").insertMany(keys(ranks.RACER_RANKS), log);
		db.collection("rank.police").insertMany(keys(ranks.POLICE_RANKS), log);

		client.close();
		res.send("Ranks added: " + JSON.stringify({
			"Discord": len(ranks.DISCORD_RANKS),
			"Racer": len(ranks.RACER_RANKS),
			"Police": len(ranks.POLICE_RANKS)
		}));
	})
});

router.put('/users', (req, res) => {
	mongo.connect(dbUri, (err, client) => {
		const collection = client.db("store").collection('user.user');

		collection.insertMany(users.DEFAULT_USERS, (err, result) => {
			client.close();
			res.send("Added " + users.DEFAULT_USERS.length + " users to the database");
		});
	});
});

router.put('/events', (req, res) => {
	mongo.connect(dbUri, (err, client) => {
		const dbModel = client.db("model");

		dbModel.collection("event.type").insertMany(keys(events.EVENTS_TYPES), log);
		dbModel.collection("event.tier").insertMany(keys(events.EVENTS_TIERS), log);
		dbModel.collection("event.player").insertMany(keys(events.EVENTS_PLAYERS), log);
		dbModel.collection("event.singleplayer").insertMany(events.EVENTS_SP, log);
		dbModel.collection("event.multiplayer").insertMany(events.EVENTS_MP, log);

		client.close();
		res.send("Events added: " + JSON.stringify({
			"Types": len(events.EVENTS_TYPES),
			"Tiers": len(events.EVENTS_TIERS),
			"Players": len(events.EVENTS_PLAYERS),
			"Singleplayer": events.EVENTS_SP.length,
			"Multiplayer": events.EVENTS_MP.length,
		}));
	});
});

router.put('/times', (req, res) => {
	mongo.connect(dbUri, (err, client) => {
		const dbStore = client.db("store");

		dbStore.collection("event.times").insertMany(eventTimes.DEFAULT_TIMES, log);
		
		client.close();
		res.send("Event results added: " + eventTimes.DEFAULT_TIMES.length);
	})
})

module.exports = router;
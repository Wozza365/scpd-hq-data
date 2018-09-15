var dbUri = require('../helpers/db').dbUri;
var mongo = require('mongodb').MongoClient;

// db controller routes
var express = require('express');
var router = express.Router();

// models
var User = require('../models/User');

// enums
var users = require("../enums/users");
var ranks = require("../enums/ranks");
var events = require("../enums/events");
var keys = require("../helpers/enum-help").keys;
var len = require("../helpers/enum-help").length;
var log = require("../helpers/db").log;

// get /api/db/
router.put('/users', (req, res) => {
	mongo.connect(dbUri, (err, client) => {
		const collection = client.db("store").collection('users');

		collection.insertMany(users.DEFAULT_USERS, (err, result) => {
			client.close();
			res.send("Added " + users.DEFAULT_USERS.length + " users to the database");
		});
	});
});

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

router.put('/events', (req, res) => {
	mongo.connect(dbUri, (err, client) => {
		const dbModel = client.db("model");

		dbModel.collection("event.type").insertMany(keys(events.EVENTS_TYPES), log);
		dbModel.collection("event.tier").insertMany(keys(events.EVENTS_TIERS), log);
		dbModel.collection("event.player").insertMany(keys(events.EVENTS_PLAYERS), log);
		dbModel.collection("event.singleplayer").insertMany(keys(events.EVENTS_SP), log);
		dbModel.collection("event.multiplayer").insertMany(keys(events.EVENTS_MP), log);

		client.close();
		res.send("Events added: " + JSON.stringify({
			"Types": len(events.EVENTS_TYPES),
			"Tiers": len(events.EVENTS_TIERS),
			"Players": len(events.EVENTS_PLAYERS),
			"Singleplayer": len(events.EVENTS_SP),
			"Multiplayer": len(events.EVENTS_MP),
		}));
	});
});

module.exports = router;
var test = require("../helpers/enum-help").test;
var events = require("../enums/events.js");
var Tier = require("../models/Tier");

module.exports = class Event {
	/**
     *Creates an instance of Event.
     * @param {String} name
     * @param {String} location
     * @param {Number} distance
     * @param {events.EVENTS_TYPES} type
     * @param {Tier} tier
     * @memberof Event
     */
	constructor(name, location, distance, type, tier) {
		this.name = name;
		this.location = location;
		this.distanceKm = Number.parseFloat(distance).toFixed(2);
		this.distanceMi = Number.parseFloat(distance / 1.6).toFixed(2);
		this.type = test(type, events.EVENTS_TYPES);
		this.tier = type === "Multiplayer" ? new Tier("Any", "Both") : tier;
	}
};
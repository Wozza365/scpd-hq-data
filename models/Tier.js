var test = require('../helpers/enum-help').test;
var events = require('../enums/events');

module.exports = class Tier {
	/**
     *Creates an instance of Tier.
     * @param {events.EVENTS_TIERS} tier
     * @param {events.EVENTS_PLAYERS} player
     */
	constructor(tier, player) {
		this.tier = test(tier, events.EVENTS_TIERS);
		this.player = test(player, events.EVENTS_PLAYERS);
	}
};
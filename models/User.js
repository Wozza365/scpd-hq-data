var test = require("../helpers/enum-help").test;
var ranks = require("../enums/ranks");

module.exports = class User {
	/**
	 *Creates an instance of User.
	 * @param {String} gameName
	 * @param {String} password
	 * @param {String} discordName
	 * @param {ranks.DISCORD_RANKS} discordRank
	 * @param {Boolean} adminAccess
	 * @param {ranks.RACER_RANKS} racerRank
	 * @param {ranks.POLICE_RANKS} policeRank
	 */
	constructor(gameName, password, discordName, discordRank, adminAccess, racerRank, policeRank) {
		this.adminAccess = adminAccess;
		this.discordName = discordName;
		this.discordRank = test(discordRank, ranks.DISCORD_RANKS);
		this.gameName = gameName;
		this.password = password;
		this.racerRank = test(racerRank, ranks.RACER_RANKS);
		this.policeRank = test(policeRank, ranks.POLICE_RANKS);
	}
};
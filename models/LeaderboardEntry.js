var test = require('../helpers/db').test;

module.exports = class LeaderboardEntry {
    constructor(gameName, season, points) {
        test("store", "user.user", "gameName", gameName).then(result => {
            this.gameName = result;
        });
        this.season = season;
        this.points = points;
    }
}
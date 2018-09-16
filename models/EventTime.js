var test = require('../helpers/db').test;
var select = require('../helpers/db').select;

module.exports = class EventTime {
    /**
     *Creates an instance of EventTime.
     * @param {String} gameName
     * @param {String} eventName
     * @param {String} vehicle
     * @param {String} time
     */
    constructor(gameName, eventName, vehicle, time) {
        test("store", "user.user", "gameName", gameName).then(result => {
            this.gameName = result;
        });
        test("model", "event.singleplayer", "name", eventName).then(result => {
            this.eventName = result;
        });
        
        this.vehicle = vehicle;
        this.time = time;
    }
}
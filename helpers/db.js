

module.exports.log = (err, res) => {
	if (err) { console.log("Error: " + err); }
	if (res) { console.log("Result: " + JSON.stringify(res)); }
};

module.exports.dbUri = require('./db-string');
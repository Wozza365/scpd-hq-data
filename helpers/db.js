var mongo = require('mongodb').MongoClient;

var dbUri = require('./db-string');
module.exports.dbUri = dbUri;

module.exports.log = (err, res) => {
	if (err) { console.log("Error: " + err); }
	if (res) { console.log("Result: " + JSON.stringify(res)); }
};

/**
 * @param {String} db
 * @param {String} coll
 * @param {String} field
 * @param {*} value
 */
module.exports.select = async (db, coll, field, value) => {
	var client = await mongo.connect(dbUri);
	const collection = client.db(db).collection(coll);
	var has = await collection.find({
		[field]: value
	}).count();
	//console.log(has);
	client.close();
	return has;
	//client.close();
}

/**
 * @param {String} db
 * @param {String} coll
 * @param {String} field
 * @param {*} value
 */
module.exports.test = async (db, coll, field, value) => {
	var client = await mongo.connect(dbUri);
	const dbAny = client.db(db);
	var list = await dbAny.admin().listDatabases();
	//console.log(list);
	var result;
	if (list.databases.find(x => x.name === db)) {
		var select = await module.exports.select(db, coll, field, value);//.then((result) => {
		//console.log(select);
		
		//console.log(result);
		//return value;
		if (select > 0) {
			result = value;
		} else {
			throw Error("Value was not found in the database Val: " + value + ", coll: " + coll + ", db: " + db + ", field: " + field);
		}
	} else {
		result = value;
	}
	//console.log(result);
	return result;

	// var result;
	// mongo.connect(dbUri, (err, client) => {
	// 	const dbAny = client.db(db);

	// 	//check that the database exists, don't want to test against a non-existent database in the setup phase
	// 	dbAny.admin().listDatabases().then((result) => {
	// 		client.close();
	// 		//console.log(result);
	// 		if (result.databases.find(x => x.name === db)) {
	// 			module.exports.select(db, coll, field, value).then((result) => {
	// 				//console.log(result);
	// 				//return value;
	// 				if (result > 0) {
	// 					result = value;
	// 				} else {
	// 					throw Error("Value was not found in the database Val: " + value + ", coll: " + coll + ", db: " + db + ", field: " + field);
	// 				}
	// 			});
	// 		} else {
	// 			result = value;
	// 		}
	// 	});
	// });
	// console.log(result);
	// return result;
}
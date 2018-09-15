require("enum");

/**
 * @param {String} val
 * @param {*} e
 */
module.exports.test = (val, e) => {
	return e.get(val) ? val : () => { 
		throw Error("Invalid type: " + val); 
	};
};

module.exports.keys = (e) => {
	return e.enums.map(e => { return { rank: e.key }; });
};

module.exports.length = (e) => {
	return e.enums.length;
};
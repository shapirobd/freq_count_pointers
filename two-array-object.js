// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
	// create an empty object
	const obj = {};
	// loop over keys
	for (let i = 0; i < keys.length; i++) {
		// if !values[i] -> keys[i]: null
		if (!values[i]) {
			obj[keys[i]] = null;
		} else {
			// insert into object -> keys[i]: values[i]
			obj[keys[i]] = values[i];
		}
	}
	return obj;
}

module.exports = twoArrayObject;

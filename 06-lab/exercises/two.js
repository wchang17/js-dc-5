function twoAsNum() {
	console.log(2)
}

function twoAsString() {
	console.log('two')
}

module.exports['twoAsNum'] = twoAsNum
module.exports.twoAsString = twoAsString //to add multiple values to an object with dot notation and brackets
// Number of People in the Bus
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function (busStops) {
	let total = 0

	busStops.forEach(item => (total += item[0] - item[1]))

	return total
}

module.exports = number

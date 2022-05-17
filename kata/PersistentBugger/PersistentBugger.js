// Persistent Bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
	let total = 0

	let now = num

	while (1) {
		const nowString = now.toString()

		if (nowString.length === 1) return total

		now = nowString
			.split('')
			.map(Number)
			.reduce((prev, next) => prev * next, 1)

		total++
	}
}

module.exports = persistence

// Bouncing Balls
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

function bouncingBall(h, bounce, window) {
	if (!(h > 0)) return -1
	if (!(bounce > 0 && bounce < 1)) return -1
	if (!(window < h)) return -1

	let height = h
	let count = 0

	while (height > window) {
		if (height > window) count++

		height = height * bounce

		if (height > window) count++
	}

	return count
}

module.exports = bouncingBall

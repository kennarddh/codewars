// You're a square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

const isSquare = n => {
	return Math.sqrt(n) % 1 === 0
}

module.exports = isSquare

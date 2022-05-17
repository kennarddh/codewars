// Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

function toJadenCase(text) {
	return text.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}

module.exports = toJadenCase

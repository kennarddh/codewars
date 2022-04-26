// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
	var vowelsCount = 0

	// enter your majic here
	for (var i = 0; i < str.length; i++) {
		if (['a', 'e', 'i', 'o', 'u'].includes(str.charAt(i))) vowelsCount++
	}
	return vowelsCount
}

module.exports = getCount

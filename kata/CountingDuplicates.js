// Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
	const allLetters = [...new Set(text.toLowerCase().split(''))]

	let result = 0

	allLetters.forEach(letter => {
		const length = (text.toLowerCase().match(new RegExp(letter, 'g')) || [])
			.length

		if (length > 1) result += 1
	})

	return result
}

module.exports = duplicateCount

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

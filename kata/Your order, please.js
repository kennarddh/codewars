function order(words) {
	if (words === '') return ''

	const splitWords = words.split(' ')

	const result = {}

	splitWords.forEach(item => {
		const number = item.match(/\d/g).join('')

		result[number] = item
	})

	return Object.values(result).join(' ')
}

module.exports = order

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

console.log(order('is2 Thi1s T4est 3a'))

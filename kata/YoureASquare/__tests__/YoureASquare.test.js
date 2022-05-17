const isSquare = require('../YoureASquare.js')

describe('YoureASquare', () => {
	it.each([
		{ input: [-1], output: false },
		{ input: [0], output: true },
		{ input: [3], output: false },
		{ input: [4], output: true },
		{ input: [25], output: true },
		{ input: [26], output: false },
	])('should return $output for $input', ({ input, output }) => {
		expect(isSquare(...input)).toBe(output)
	})
})

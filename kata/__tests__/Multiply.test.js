const multiply = require('../Multiply.js')

describe('Multiply', () => {
	it.each([
		{ input: [1, 1], output: 1 },
		{ input: [2, 1], output: 2 },
		{ input: [2, 2], output: 4 },
		{ input: [3, 5], output: 15 },
	])('should return $output for $input', ({ input, output }) => {
		expect(multiply(...input)).toBe(output)
	})
})

const queueTime = require('../TheSupermarketQueue.js')

describe('TheSupermarketQueue', () => {
	it.each([
		{ input: [[], 1], output: 0 },
		{ input: [[1, 2, 3, 4], 1], output: 10 },
		{ input: [[2, 2, 3, 3, 4, 4], 2], output: 9 },
		{ input: [[1, 2, 3, 4, 5], 100], output: 5 },
	])('should return $output for $input', ({ input, output }) => {
		expect(queueTime(...input)).toBe(output)
	})
})

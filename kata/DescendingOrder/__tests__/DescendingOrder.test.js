const descendingOrder = require('../DescendingOrder.js')

describe('DescendingOrder', () => {
	it.each([
		{ input: [0], output: 0 },
		{ input: [1], output: 1 },
		{ input: [111], output: 111 },
		{ input: [15], output: 51 },
		{ input: [1021], output: 2110 },
		{ input: [123456789], output: 987654321 },
	])('should return $output for $input', ({ input, output }) => {
		expect(descendingOrder(...input)).toBe(output)
	})
})

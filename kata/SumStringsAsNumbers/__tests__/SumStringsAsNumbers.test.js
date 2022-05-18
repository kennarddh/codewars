const sumStrings = require('../SumStringsAsNumbers.js')

describe('SumStringsAsNumbers', () => {
	it.each([
		{ input: ['123', '456'], output: '579' },
		{ input: ['', '5'], output: '5' },
		{ input: ['999', '23'], output: '1022' },
		{ input: ['00103', '08567'], output: '8670' },
	])('should return $output for $input', ({ input, output }) => {
		expect(sumStrings(...input)).toBe(output)
	})
})

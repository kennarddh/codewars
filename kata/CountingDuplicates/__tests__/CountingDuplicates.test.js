const duplicateCount = require('../CountingDuplicates.js')

describe('CountingDuplicates', () => {
	it.each([
		{ input: [''], output: 0 },
		{ input: ['abcde'], output: 0 },
		{ input: ['aabbcde'], output: 2 },
		{ input: ['aabBcde'], output: 2 },
		{ input: ['Indivisibility'], output: 1 },
		{ input: ['Indivisibilities'], output: 2 },
	])('should return $output for $input', ({ input, output }) => {
		expect(duplicateCount(...input)).toBe(output)
	})
})

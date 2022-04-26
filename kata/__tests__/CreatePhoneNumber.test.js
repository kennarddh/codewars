const createPhoneNumber = require('../CreatePhoneNumber.js')

describe('CreatePhoneNumber', () => {
	it.each([
		{ input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]], output: '(123) 456-7890' },
		{ input: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], output: '(111) 111-1111' },
		{ input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]], output: '(123) 456-7890' },
	])('should return $output for $input', ({ input, output }) => {
		expect(createPhoneNumber(...input)).toBe(output)
	})
})

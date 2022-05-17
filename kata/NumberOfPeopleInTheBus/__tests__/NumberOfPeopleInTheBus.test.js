const number = require('../NumberOfPeopleInTheBus.js')

describe('NumberOfPeopleInTheBus', () => {
	it.each([
		{
			input: [
				[
					[10, 0],
					[3, 5],
					[5, 8],
				],
			],
			output: 5,
		},
		{
			input: [
				[
					[3, 0],
					[9, 1],
					[4, 10],
					[12, 2],
					[6, 1],
					[7, 10],
				],
			],
			output: 17,
		},
		{
			input: [
				[
					[3, 0],
					[9, 1],
					[4, 8],
					[12, 2],
					[6, 1],
					[7, 8],
				],
			],
			output: 21,
		},
		{ input: [[[0, 0]]], output: 0 },
	])('should return $output for $input', ({ input, output }) => {
		expect(number(...input)).toBe(output)
	})
})

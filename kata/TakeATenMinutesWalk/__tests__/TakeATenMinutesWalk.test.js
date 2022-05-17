const isValidWalk = require('../TakeATenMinutesWalk.js')

describe('TakeATenMinutesWalk', () => {
	it.each([
		{
			input: [['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']],
			output: true,
		},
		{
			input: [
				['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'],
			],
			output: false,
		},
		{ input: [['w']], output: false },
		{
			input: [['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']],
			output: false,
		},
	])('should return $output for $input', ({ input, output }) => {
		expect(isValidWalk(...input)).toBe(output)
	})
})

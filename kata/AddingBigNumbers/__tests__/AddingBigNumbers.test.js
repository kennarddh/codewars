const add = require('../AddingBigNumbers.js')

describe('AddingBigNumbers', () => {
	it.each([
		{ input: ['1', '1'], output: '2' },
		{ input: ['123', '456'], output: '579' },
		{ input: ['888', '222'], output: '1110' },
		{ input: ['1372', '69'], output: '1441' },
		{ input: ['12', '456'], output: '468' },
		{ input: ['101', '100'], output: '201' },
		{
			input: [
				'63829983432984289347293874',
				'90938498237058927340892374089',
			],
			output: '91002328220491911630239667963',
		},
	])('should return $output for $input', ({ input, output }) => {
		expect(add(...input)).toBe(output)
	})
})

const order = require('../YourOrderPlease.js')

describe('YourOrderPlease', () => {
	it.each([
		{ input: ['is2 Thi1s T4est 3a'], output: 'Thi1s is2 3a T4est' },
		{
			input: ['4of Fo1r pe6ople g3ood th5e the2'],
			output: 'Fo1r the2 g3ood 4of th5e pe6ople',
		},
		{ input: [''], output: '' },
	])('should return $output for $input', ({ input, output }) => {
		expect(order(...input)).toBe(output)
	})
})

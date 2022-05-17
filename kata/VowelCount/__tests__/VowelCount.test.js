const getCount = require('../VowelCount.js')

describe('VowelCount', () => {
	it.each([{ input: ['abracadabra'], output: 5 }])(
		'should return $output for $input',
		({ input, output }) => {
			expect(getCount(...input)).toBe(output)
		}
	)
})

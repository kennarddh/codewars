const towerBuilder = require('../BuildTower.js')

describe('BuildTower', () => {
	it.each([
		{ input: [1], output: ['*'] },
		{ input: [2], output: [' * ', '***'] },
		{ input: [3], output: ['  *  ', ' *** ', '*****'] },
	])('should return $output for $input', ({ input, output }) => {
		expect(towerBuilder(...input)).toStrictEqual(output)
	})
})

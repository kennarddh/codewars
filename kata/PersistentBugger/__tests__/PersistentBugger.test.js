const persistence = require('../PersistentBugger.js')

describe('PersistentBugger', () => {
	it.each([
		{ input: [39], output: 3 },
		{ input: [4], output: 0 },
		{ input: [25], output: 2 },
		{ input: [999], output: 4 },
	])('should return $output for $input', ({ input, output }) => {
		expect(persistence(...input)).toBe(output)
	})
})

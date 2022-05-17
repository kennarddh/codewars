const toJadenCase = require('../JadenCasingStrings.js')

describe('JadenCasingStrings', () => {
	it.each([
		{
			input: ["How can mirrors be real if our eyes aren't real"],
			output: "How Can Mirrors Be Real If Our Eyes Aren't Real",
		},
	])('should return $output for $input', ({ input, output }) => {
		expect(toJadenCase(...input)).toBe(output)
	})
})

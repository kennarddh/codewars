const bouncingBall = require('../BouncingBalls.js')

describe('BouncingBalls', () => {
	it.each([
		{ input: [3.0, 0.66, 1.5], output: 3 },
		{ input: [30.0, 0.66, 1.5], output: 15 },
		{ input: [3.0, 1.0, 1.5], output: -1 },
	])('should return $output for $input', ({ input, output }) => {
		expect(bouncingBall(...input)).toBe(output)
	})
})

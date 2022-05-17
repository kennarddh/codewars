const {
	two,
	three,
	four,
	five,
	six,
	seven,
	eight,
	nine,
	plus,
	minus,
	times,
	dividedBy,
} = require('../CalculatingWithFunctions.js')

describe('CalculatingWithFunctions', () => {
	it('should return 35 for seven(times(five()))', () => {
		expect(seven(times(five()))).toBe(35)
	})

	it('should return 13 for four(plus(nine()))', () => {
		expect(four(plus(nine()))).toBe(13)
	})

	it('should return 5 for eight(minus(three()))', () => {
		expect(eight(minus(three()))).toBe(5)
	})

	it('should return 3 for six(dividedBy(two()))', () => {
		expect(six(dividedBy(two()))).toBe(3)
	})
})

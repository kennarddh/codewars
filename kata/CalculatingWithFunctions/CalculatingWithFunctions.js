// Calculating with Functions
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const zero = callback => (callback ? callback(0) : 0)
const one = callback => (callback ? callback(1) : 1)
const two = callback => (callback ? callback(2) : 2)
const three = callback => (callback ? callback(3) : 3)
const four = callback => (callback ? callback(4) : 4)
const five = callback => (callback ? callback(5) : 5)
const six = callback => (callback ? callback(6) : 6)
const seven = callback => (callback ? callback(7) : 7)
const eight = callback => (callback ? callback(8) : 8)
const nine = callback => (callback ? callback(9) : 9)

const plus = number1 => number2 => number2 + number1
const minus = number1 => number2 => number2 - number1
const times = number1 => number2 => number2 * number1
const dividedBy = number1 => number2 => Math.floor(number2 / number1)

module.exports = {
	zero,
	one,
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
}

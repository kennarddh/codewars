// Sum Strings as Numbers
// https://www.codewars.com/kata/5324945e2ece5e1f32000370/javascript

const sumStrings = (a, b) => {
	a = a ? a : '0'
	b = b ? b : '0'

	const number1 = a.length > b.length ? a : b
	const number2 = a.length > b.length ? b : a

	const number1Array = number1.split('').reverse().map(Number)
	const number2Array = number2.split('').reverse().map(Number)

	let carry = 0

	const result = number1Array.map((number, index) => {
		const sum =
			number + (number2Array[index] ? number2Array[index] : 0) + carry

		carry = Math.floor(sum / 10)

		return sum % 10
	})

	if (carry) result.push(carry)

	result.reverse()

	if (result[0] === 0) result.shift()

	return result.map(String).join('')
}

module.exports = sumStrings

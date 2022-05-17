// Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
	return parseInt(
		n
			.toString()
			.split('')
			.map(s => parseInt(s))
			.sort((a, b) => b - a)
			.join('')
	)
}

module.exports = descendingOrder

// Take a Ten Minutes Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
	let x = 0
	let y = 0
	let time = 10

	walk.forEach(direction => {
		switch (direction) {
			case 'e':
				x++

				break

			case 'w':
				x--

				break

			case 'n':
				y++

				break

			case 's':
				y--

				break
		}

		time--
	})

	return x === 0 && y === 0 && time === 0
}

module.exports = isValidWalk

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

    console.log(x)
    console.log(y)

	return x === 0 && y === 0 && time === 0
}

console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))

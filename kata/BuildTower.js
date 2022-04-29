// Build Tower
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
	const results = []

	for (let i = 1; i < nFloors + 1; i++) {
		results.push(
			' '.repeat(nFloors - i) +
				'*'.repeat(i + i - 1) +
				' '.repeat(nFloors - i)
		)
	}

	return results
}

module.exports = towerBuilder

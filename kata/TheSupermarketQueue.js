// The Supermarket Queue
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
	const queues = Array(n).fill(0)

	customers.forEach(item => {
		queues[queues.indexOf(Math.min(...queues))] += item
	})

	return Math.max(...queues)
}

module.exports = queueTime

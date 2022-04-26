function queueTime(customers, n) {
	const queues = Array(n).fill(0)

	customers.forEach(item => {
		queues[queues.indexOf(Math.min(...queues))] += item
	})

	return Math.max(...queues)
}

module.exports = queueTime

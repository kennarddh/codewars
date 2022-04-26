function queueTime(customers, n) {
    const queues = Array(n).fill(0)

    customers.forEach(item => {
        queues[queues.indexOf(Math.min(...queues))] += item
    })

    return Math.max(...queues)
}

console.log(queueTime([1,2,3,4,5], 100))

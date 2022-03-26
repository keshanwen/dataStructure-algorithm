// 队列，先进先出
function Queue() {
    this.items = []

    this.enqueue = function(element) {
        this.items.push(element)
    }

    this.dequeue = function() {
        return this.items.shift()
    }

    this.front = function() {
        return this.items[0]
    }

    this.isEmpty = function() {
        return this.items.length === 0
    }

    this.size = function() {
        return this.items.length
    }

    this.clear = function() {
        this.items = []
    }

    this.print = function() {
        console.log(this.items.toString())
    }

}

const queue = new Queue()
// console.log(queue.isEmpty())
// queue.enqueue('aaaa')
// queue.enqueue('bbbb')
// queue.enqueue('cccc')
// queue.print()
// console.log(queue.size())
// console.log(queue.isEmpty())
// queue.dequeue()
// queue.dequeue()
// queue.print()
// queue.clear()
// console.log(queue.size())

module.exports = Queue
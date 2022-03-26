const Queue = require('./index')

function MinPriorityQueue() {
    Queue.call(this)
    this.items = []

    this.enqueue = enqueue
    this.print = print
}

MinPriorityQueue.prototype = new Queue()
MinPriorityQueue.prototype.constructor = Queue


function enqueue(element,priority) {
   const queueElement = {
       element,
       priority
   }

   if (this.isEmpty()) {
    this.items.push(queueElement)
   } else {
    var added = false
    for (let i = 0;i < this.size(); i++) {
        if ( queueElement.priority < this.items[i].priority ) {
            this.items.splice(i,0,queueElement)
            added = true
            break
        }
    }

    // 比较到了最后一个元素也没有满足上面条件，那么放到最后一个位置
    if (!added) {
        this.items.push(queueElement)
    }
   }
}

function print() {
    let strArr = []

    strArr = this.items.map( item => `${item.element} - ${item.priority}` )

    console.log(strArr.toString())
}

const minPriorityQueue = new MinPriorityQueue()

console.log(minPriorityQueue.isEmpty())
minPriorityQueue.enqueue('aaaa',1)
minPriorityQueue.enqueue('ddddddddd',4)
minPriorityQueue.enqueue('ccccc',3)
minPriorityQueue.enqueue('bbbbbb',2)
console.log(minPriorityQueue.print())
console.log(minPriorityQueue.size())
console.log(minPriorityQueue.isEmpty())
console.log(minPriorityQueue.dequeue())
console.log(minPriorityQueue.dequeue())
minPriorityQueue.print()
minPriorityQueue.clear()
console.log(minPriorityQueue.size())
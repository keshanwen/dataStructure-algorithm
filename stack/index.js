// 栈，后进先出
function Stack() {
    this.items = []

    this.push = function(element) {
        this.items.push(element)
    }

    this.pop = function() {
        return this.items.pop()
    }

    this.peek = function() {
        return this.items[this.items.length - 1]
    }

    this.isEmpty = function() {
        return this.items.length === 0
    }

    this.clear = function() {
        this.items = []
    }

    this.size = function() {
        return this.items.length
    }

    this.print = function() {
        console.log(this.items.toString())
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(5)
stack.push(8)
console.log(stack.peek())
stack.push(11)
console.log(stack.size())
console.log(stack.isEmpty())
stack.push(15)
console.log(stack.pop())
console.log(stack.size())
stack.print()
stack.clear()
console.log(stack.size())
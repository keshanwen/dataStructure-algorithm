function SinglyLinkedList() {
    // 节点
    function Node(element) {
        this.element = element // 当前节点的元素
        this.next = null // 下一个节点指针
    }

    var length = 0 // 链表长度
    var head = null // 链表的头节点

    // 向链表尾部添加一个新的节点
    this.append = function(element) {
        var node = new Node(element)
        var currentNode = head

        // 判断是否为空链表
        if (head === null) {
          head = node  
        } else {
            // 从head 开始一直找到最后一个node
            while(currentNode.next) {
                // 后面还有node
                currentNode = currentNode.next
            }
            // 把当前节点的next指针 指向 新的节点
            currentNode.next = node
        }
        // 链表的长度加 1
        length++
    }

    // 向链表特定位置插入一个新的节点
    this.insert = function(posotion,element) {
        if (posotion < 0 || posotion > length) {
            // 越界
            return false
        }

        let node = new Node(element)
        let index = 0
        let currentNode = head
        let previousNode

        // 在最前面插入节点
        if (posotion === 0) {
            node.next = currentNode
            head = node
        } else {
            // 循环找到位置
            while(index < posotion) {
                index++
                previousNode = currentNode
                currentNode = currentNode.next
            }
            // 把前一个节点的指针指向新节点，新节点的指针指向当前节点，保持连接性
            previousNode.next = node
            node.next = currentNode
        }
        length++
        return true
    }

    // 从链表的特定位置移除一项
    this.removeAt = function(posotion) {
        if (posotion < 0 || ( posotion >= length && length ===0 )) {
            return false
        }

        let currentNode = head
        let index = 0
        let previousNode

        if (posotion === 0) {
            head = currentNode.next
        } else {
            // 循环找到位置
            while(index < posotion) {
                index++
                previousNode = currentNode
                currentNode = currentNode.next
            }
            // 把当前节点的 next 指针指向当前节点的 next 指针,就是删除了当前节点
            previousNode.next = currentNode.next
        }

        length--
        return true
    }

    // 返回元素在链表中的索引，如果链表中没有该元素则返回 -1
    this.indexOf = function(element) {
        let currentNode = head
        let index = 0

        while(currentNode) {
            if (currentNode.element === element) {
                return index
            }

            index++
            currentNode = currentNode.next
        }

        return -1
    }

    // 从链表中移除指定项
    this.remove = function(element) {
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.isEmpty = function() {
        return length === 0
    }

    this.size = function() {
        return length
    }

    this.getHead = function() {
        return head.element
    }

    // 由于链表使用了Node类，就需要重写继承自 javascript 对象默认的tostrig()方法，让其只输出元素的值
    this.toString = function() {
        let currentNode = head
        let string = ''

        while(currentNode) {
            string += `,${currentNode.element}`
            currentNode = currentNode.next
        }

        return string.slice(1)
    }

    // 打印链表数据
    this.print = function() {
        console.log(this.toString())
    }

    // 获取整个链表
    this.list = function() {
        console.log(head,'head~~')
        return head
    }
}

const singlyLinkedList = new SinglyLinkedList()
console.log(singlyLinkedList.removeAt(0))
console.log(singlyLinkedList.isEmpty())
singlyLinkedList.append('aaaaa')
singlyLinkedList.append('bbbb')
singlyLinkedList.append('cccccc')
singlyLinkedList.print()
singlyLinkedList.insert(0,'000000')
singlyLinkedList.print()
console.log(singlyLinkedList.getHead())
console.log(singlyLinkedList.isEmpty())
console.log(singlyLinkedList.indexOf('bbbb'))
console.log(singlyLinkedList.indexOf('aasss'))
singlyLinkedList.remove('bbbb')
singlyLinkedList.removeAt(0)
singlyLinkedList.print()
singlyLinkedList.list() // 在javascript中，单链表的真实数据有点类此与对象，实际上是node类生成的实例
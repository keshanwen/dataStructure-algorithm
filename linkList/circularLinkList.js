function CircularLinkedList() {
    function Node(element) {
        this.element = element
        this.next = null
    }

    let length = 0
        head = null;

    this.append = function(element) {
        let node = new Node(element),
            current;

        if (!head) {
            head = node
            node.next = head
        } else {
            current = head

            // 不止一个节点的时候
            while(current.next !== head) {
                current = current.next
            }

            current.next = node
            node.next = head
        }  
        
        length++
        return true
    }    

    this.insert = function(position,element) {
        if (position > -1 && position < length) {
            let node = new Node(element),
                index,
                current = head,
                previous;

            if (position === 0) {
                node.next = head
                head = node
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }   
            length++
            return true
        }
        return false
    }

    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;
            if (position === 0) {
                head = current.next
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }   
            length--
            return current.element
        }
        return false
    }

    this.remove = function(element) {
		var current = head,
			previous,
			indexCheck = 0;
		while (current && indexCheck < length) {
			if (current.element === element) {
				if (indexCheck == 0) {
					head = current.next;
					length--;
					return true;
				} else {
					previous.next = current.next;
					length--;
					return true;
				}
			} else {
				previous = current;
				current = current.next;
				indexCheck++;
			}
		}
		return false;
	};

    this.indexOf = function(element) {
        let current = head,
        index = 0;
        while(current && index < length) {
            if (current.element === element) {
                return index
            } else {
                index++
                current = current.next
            }
        }
        return -1
    }

    this.isEmpty = function() {
        return length === 0
    }

    this.size = function() {
        return length
    }

    this.toString = function() {
		var current = head,
			string = '',
			indexCheck = 0;
		while (current && indexCheck < length) {
			string += ',' + current.element;
			current = current.next;
			indexCheck++;
		}
		return string.slice(1);
	}

    // 获取链表头部元素
	this.getHead = function() {
		return head.element;
	};

	// 打印链表数据
	this.print = function() {
		console.log(this.toString());
	};

	// 获取整个链表
	this.list = function() {
		console.log('head: ', head);
		return head;
	};
}

let circularLinkedList = new CircularLinkedList()
console.log(circularLinkedList.removeAt(0))
console.log(circularLinkedList.isEmpty())
circularLinkedList.append('aa')
circularLinkedList.append('bb')
circularLinkedList.append('cc')
circularLinkedList.print()
circularLinkedList.insert(0,'000')
circularLinkedList.print()
console.log(circularLinkedList.getHead())
console.log(circularLinkedList.isEmpty())
console.log(circularLinkedList.indexOf('aa'))
circularLinkedList.remove('aa')
circularLinkedList.removeAt(0)
circularLinkedList.print()
circularLinkedList.list()
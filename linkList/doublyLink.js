// 创建双向链表 DoublyLinkedList 类
function DoublyLinkedList() {
    function Node(element) {
      this.element = element; //当前节点的元素
      this.next = null; //下一个节点指针
      this.previous = null; //上一个节点指针
    }
  
    var length = 0; // 链表长度
    var head = null; // 链表头部
    var tail = null; // 链表尾部
  
    // 向链表尾部添加一个新的项
    this.append = function(element) {
      var node = new Node(element);
      var currentNode = tail;
  
      // 判断是否为空链表
      if (currentNode === null) {
        // 空链表
        head = node;
        tail = node;
      } else {
        currentNode.next = node;
        node.prev = currentNode;
        tail = node;
      }
  
      length++;
    };
  
    // 向链表特定位置插入一个新的项
    this.insert = function(position, element) {
      if (position < 0 || position > length) {
        // 越界
        return false;
      } else {
        var node = new Node(element);
        var index = 0;
        var currentNode = head;
        var previousNode;
  
        if (position === 0) {
          if (!head) {
            head = node;
            tail = node;
          } else {
            node.next = currentNode;
            currentNode.prev = node;
            head = node;
          }
        } else if (position === length) {
          this.append(element);
        } else {
          while (index < position) {
            index++;
            previousNode = currentNode;
            currentNode = currentNode.next;
          }
  
          previousNode.next = node;
          node.next = currentNode;
  
          node.prev = previousNode;
          currentNode.prev = node;
        }
  
        length++;
  
        return true;
      }
    };
  
    // 从链表的特定位置移除一项
    this.removeAt = function(position) {
      if ((position < 0 && position >= length) || length === 0) {
        // 越界
        return false;
      } else {
        var currentNode = head;
        var index = 0;
        var previousNode;
  
        if (position === 0) {
          // 移除第一项
          if (length === 1) {
            head = null;
            tail = null;
          } else {
            head = currentNode.next;
            head.prev = null;
          }
        } else if (position === length - 1) {
          // 移除最后一项
          if (length === 1) {
            head = null;
            tail = null;
          } else {
            currentNode = tail;
            tail = currentNode.prev;
            tail.next = null;
          }
        } else {
          while (index < position) {
            index++;
            previousNode = currentNode;
            currentNode = currentNode.next;
          }
          previousNode.next = currentNode.next;
          previousNode = currentNode.next.prev;
        }
  
        length--;
  
        return true;
      }
    };
  
    // 从链表中移除指定项
    this.remove = function(element) {
      var index = this.indexOf(element);
      return this.removeAt(index);
    };
  
    // 返回元素在链表的索引，如果链表中没有该元素则返回 -1
    this.indexOf = function(element) {
      var currentNode = head;
      var index = 0;
  
      while (currentNode) {
        if (currentNode.element === element) {
          return index;
        }
  
        index++;
        currentNode = currentNode.next;
      }
  
      return -1;
    };
  
    // 如果链表中不包含任何元素，返回 true ，如果链表长度大于 0 ，返回 false
    this.isEmpty = function() {
      return length == 0;
    };
  
    // 返回链表包含的元素个数，与数组的 length 属性类似
    this.size = function() {
      return length;
    };
  
    // 获取链表头部元素
    this.getHead = function() {
      return head.element;
    };
  
    // 由于链表使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString() 方法，让其只输出元素的值
    this.toString = function() {
      var currentNode = head;
      var string = '';
  
      while (currentNode) {
        string += ',' + currentNode.element;
        currentNode = currentNode.next;
      }
  
      return string.slice(1);
    };
  
    this.print = function() {
      console.log(this.toString());
    };
  
    // 获取整个链表
    this.list = function() {
      console.log('head: ', head);
      return head;
    };
  }

var doublyLinked = new DoublyLinkedList();
console.log(doublyLinked.isEmpty()); // true
doublyLinked.append('aaa');
doublyLinked.append('bbbb');
doublyLinked.append('ccccc');
doublyLinked.print();
doublyLinked.insert(0,'00000')
doublyLinked.print();
doublyLinked.insert(1, 'jack');
doublyLinked.print()
console.log(doublyLinked.getHead());
console.log(doublyLinked.isEmpty());
console.log(doublyLinked.indexOf('jack')); // 3
console.log(doublyLinked.indexOf('Cris')); // -1
doublyLinked.remove('jack');
doublyLinked.removeAt(0);
doublyLinked.print()
doublyLinked.list()

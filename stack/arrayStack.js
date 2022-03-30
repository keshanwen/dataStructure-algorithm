// 基于数组实现的顺序栈
class ArrayStack {
    constructor(n) {
        this.items = [];  // 数组
        this.count = 0;   // 栈中元素个数
        this.n = n;       // 栈的大小
    }
  
    // 入栈操作
    push(item) {
      // 数组空间不够了，直接返回 false，入栈失败。
      if (this.count === this.n) return false;
      // 将 item 放到下标为 count 的位置，并且 count 加一
      this.items[this.count] = item;
      ++this.count;
      return true;
    }
    
    // 出栈操作
    pop() {
      // 栈为空，则直接返回 null
      if (this.count == 0) return null;
      // 返回下标为 count-1 的数组元素，并且栈中元素个数 count 减一
      let tmp = items[this.count-1];
      --this.count;
      return tmp;
    }
  }


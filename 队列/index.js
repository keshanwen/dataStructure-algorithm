
function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
}

/** 向队尾添加一个元素*/ 
function enqueue(elemet) {
  this.dataStore.push(elemet);
}

/** 删除队首的元素*/ 
function dequeue() {
  return this.dataStore.shift();
}

/** 读取队首和队尾的数据*/
function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

/** 显示队内所有元素*/
function toString() {
  var retStr = '';
  for (var i =0;i < this.dataStore.length;++i) {
    retStr += this.dataStore[i] + '\n';
  }
  return retStr
} 

/** 判断队列是否为空*/
function empty() {
  if (this.dataStore.length == 0)  return true
  return false
} 


function count() {
  return this.dataStore.length;
}
  
  var q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  console.log(q.toString())
  q.dequeue();
  console.log(q.toString())
  console.log(q.front())
  console.log(q.back())

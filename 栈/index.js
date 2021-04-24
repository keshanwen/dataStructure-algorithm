/**栈    先进后出 */ 
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.lengths = lengths;
}

function push(element) {
  this.dataStore[this.top++] = element;
}  

/**返回栈顶元素 */ 
function peek() {
  return this.dataStore[this.top - 1];
}

function pop() {
  return this.dataStore[--this.top];
}

function clear() {
  this.top = 0;
}

function lengths() {
  return this.top;
}

var s = new Stack();
s.push(1)
s.push(2)
s.push(3)
console.log('length   ' + s.lengths())
console.log(s.peek())



// 判断一个字符串是否是回文

function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0;i < word.length;i++) {
    s.push(word[i]);
  }
  var rword = '';
  while(s.lengths() > 0) {
    rword += s.pop();
  }
  if (word === rword) return true;
  return false; 
}


// 递归
// 1*2*3*.......*n

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n*factorial(n-1);
}


function fact(n) {
  var s = new Stack();
  while(n > 1) {
    s.push(n--)
  }  
  var product = 1;
  while(s.lengths() > 0) {
    product *= s.pop()
  }
  return product
}




var arr = [
  {
    a: 'kebi',
    b: 24,
    chidren: [
      {
        a: 'kebi1',
        b: 25,
        chidren: [
          {
            a: 'kebi3',
            b: 27
          },
        ]
      },
      {
        a: 'kebi2',
        b: 26
      },
    ]
  },
  {
    a: 'yaming',
    b: 28
  }
]

/**将a换成name,b换成age */
/** 由易到难 
 
1，考虑只有一层的时候(记得return返回给自己哦)

2, 考虑多层（实际上是自己调用自己）

3，考虑终止条件

 * */  

// 1，考虑只有一层的时候

/*
function deepclone(value) {
  var arr = []
 for (var i = 0;i < value.length;i++) {
  let obj = {
    name: obj[i].a,
    age: obj[i].b
  }
  arr.push(obj)
 }
 return arr
}
*/

// 2,考虑多层 (实际上是自己调用自己)
// 思考：在何处自己调用自己？何处终止?
function deepclone(value) {
  var arr = []
  for (var i = 0;i < value.length;i++) {
      const obj = {
        name: value[i].a,
        age: value[i].b
      }
      // 终止条件
      if (value[i].chidren && value[i].chidren.length) {
        obj.chidren = deepclone(value[i].chidren);
      }
      arr.push(obj)
  }
  return arr
}

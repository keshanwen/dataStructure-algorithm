/**1*2*3******n */
/** 
  明白函数用途
  找规律，如何自己调用自己，一般通过fn(n) fn(n-1) n 来找关系（记得return返回给自己哦）
  终止条件

*/ 


/**
  
 找规律，如何自己调用自己，一般通过fn(n) fn(n-1) n 来找关系（记得return返回给自己哦）
  fn(n) = 1*2*3********n 
  fn(n-1) = 1*2*3*****(n-1)

  fn(n) = n.fn(n-1)
 * 
*/  

/*function fn(n) {
  return n*fn(n-1)
}*/


/**
终止条件 
*/ 

function fn(n) {
  if (n==1) return 1
  return n*fn(n-1)
} 

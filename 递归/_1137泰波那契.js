// 泰波那契序列 Tn 定义如下： 

// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

// fn(n) = fn(n-3) + fn(n-2) + fn(n-1)

// 低效算法
function fn(n) {
  if (n==0) {
    return 0
  } else if ( n==1 || n==2 ){
    return 1
  }
  console.log('我正在。。。。')
  return fn(n-3) + fn(n-2) + fn(n-1)
}

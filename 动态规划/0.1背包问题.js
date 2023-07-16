/* 
有 n 件物品和一个最大承重为 W 的背包，每件物品的重量是 w(i) 价值是 v(i)

在保证总重量不超过 W 的前提下， 选择某些物品装入背包，背包的最大总价值是多少？
注意： 每个物品只有 1 件，也就是每个物品只能选择 0 件或者 1 件

假设 values 是价值数组， weights 是重量数组
编号为 k 的物品，价值是 values[k], 重量是 weights[k], k 属于 [0,n)

假设 dp(i,j) 是最大承重为 j,有前i件物品可选时的最大总价值。 i 属于[1,n]
j 属于 [1,W]

dp(i,0) dp(0, j)初始值都为 0

如果 j < weights[i - 1], 那么 dp(i, j) = dp(i - 1, j)

----> j < weights[i - 1] 说明第 i 件物品一定没有选中。
只有这一种结果

如果 j >= weights[i - 1] ,那么 
dp(i, j) = max {
    dp(i - 1, j),
    dp(i - 1, j - wieghts[i - 1]) + values[i - 1]
}
----> j >= weights[i  -1], 说明 第 i 件物品可以被选中， 但是不一定要选中，
所以有两种可能， 
1，第 i 件物品选中。
2，第 i 件物品没有选中。 
*/

function maxValue1(values, weights, capacity) {
    if (values == null || values.length == 0) return 0
    if (weights == null || values.length == 0) return 0
    if (values.length != weights.length || capacity <= 0) return 0 
    let dp = new Array(values.length + 1).fill(new Array(capacity + 1).fill(0))
    for (let i = 1; i <= values.length; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (j < weights[i  - 1]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i - 1][j - weights[i - 1]] + values[i - 1]
                )
            }
        }
    }
    return dp[values.length][capacity]
} 
/* 

一维数组
dp(i,j) 都是由 dp(i - 1, k) 推导出来的，也就是说, 第 i 行的数据是由它的上一行 
第 i - 1 行推导出来的，所以可以使用一维数组来优化
另外， 由于  k <= j, 所以 j 的遍历应该由大到小，否则导致数据错乱

*/
function maxValue2(values, weights, capacity) {
    if (values == null || values.length == 0) return 0
    if (weights == null || values.length == 0) return 0
    if (values.length != weights.length || capacity <= 0) return 0 

    let dp = new Array(capacity + 1).fill(0)
    for (let i = 1; i <= values.length; i++) {
        for (let j = capacity; j >= 1; j--) {
            if (j < weights[i - 1]) continue
            dp[j] = Math.max(
                dp[j],
                values[i - 1] + dp[j - weights[i - 1]]
            )
        }
    }
    return dp[capacity]
}

/* 
    一维数组的优化
*/
function maxValue(values, weights, capacity) {
    if (values == null || values.length == 0) return 0
    if (weights == null || values.length == 0) return 0
    if (values.length != weights.length || capacity <= 0) return 0 
    let dp = new Array(capacity + 1).fill(0)

    for (let i = 1; i <= values.length; i++) {
        for (let j = capacity; j >= weights[i - 1]; j--) {
            dp[j] = Math.max(
                dp[j],
                values[i - 1] + dp[j - weights[i - 1]]
            )
        }
    }
    return dp[capacity]
}

let values = [6, 3, 5, 4, 6]
let weights = [2, 2, 6, 5, 4]
let capacity = 10
// const res = maxValue(values, weights, capacity)

// console.log(res, 'res')

/* 
恰好装满
dp(i,j) 初始状态调整
dp(i, 0) = 0 ,总重量恰好为 0， 最大总价值必然也为 0
dp(0,j) = -00 (负无穷), j >= 1, 负数在这里代表无法恰好装满
*/

function maxValueExactly(values, weights, capacity) {
    if (values == null || values.length == 0) return 0
    if (weights == null || values.length == 0) return 0
    if (values.length != weights.length || capacity <= 0) return 0 
    let dp = new Array(capacity + 1).fill(0)
    for (let j = 1; j <= capacity; j++) {
        dp[j] = Number.MIN_VALUE
    }  
    for (let i = 1; i <= values.length; i++) {
        for (let j = capacity; j >= weights[i - 1]; j--) {
            dp[j] = Math.max(
                dp[j],
                values[i - 1] + dp[j - weights[i - 1]]
            )
        }
    }
    return dp[capacity] < 0 ? -1 : dp[capacity]
}


// const res = maxValueExactly(values, weights, capacity)

// console.log(res, 'res')

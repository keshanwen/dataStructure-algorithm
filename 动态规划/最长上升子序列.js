/* 
状态转移方程

遍历 j 属于 [0, i)

当 nums[i] >  nums[j]
nums[i] 可以接在nums[j] 后面，形成一个比dp[j] 更长的子序列, 长度为 dp[j] + 1
dp[i] = max{  dp[i], dp[j] + 1 }

当nums[i] <= nums[j]
nums[i] 不能接在nums[j] 后面，跳过此次遍历

状态的初始值 
dp[0] = 1
所有的dp[i]初始默认为1

*/

function lengthOfLIS(nums) {
    if (nums == null || nums.length == 0) return 0;
    let dp = new Array(nums.length).fill(1)
    let max = dp[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] <= nums[j]) continue
            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
        max = Math.max(dp[i], max)
    }
    return max
}

console.log(lengthOfLIS([10, 2, 2, 5, 1, 7, 101, 18]))
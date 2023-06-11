/*
function maxSubArray(nums) {
    if (nums === null || nums.length === 0) return 0
    let dp = new Array(nums.length)
    let max = dp[0] = nums[0]
    for (let i = 1; i < dp.length; i++) {
        let prev = dp[i-1]
        if (prev > 0) {
            dp[i] = prev + nums[i]
        } else {
            dp[i] = nums[i]
        }
        max = Math.max(max, dp[i])
    }
    return max
}
*/


// 优化
function maxSubArray(nums) {
 if (nums === null || nums.length === 0) return 0
 let dp = nums[0]
 let max = dp
 for (let i = 1; i < nums.length; i++) {
    if (dp > 0) {
        dp = dp + nums[i]
    } else {
        dp = nums[i]
    }
    max = Math.max(max, dp)
 }
 return max
}

const arr = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(arr))
/* function Lcs(nusm1: any[], nums2: any[]) {
    if (nusm1 == null || nusm1.length === 0) {
        return 0
    }
    if (nums2 == null || nums2.length === 0) {
        return 0
    }
    return lcs(nusm1, nusm1.length, nums2, nums2.length)
}

function lcs(nusm1: any[], i: number, nums2: any[], j: number): number {
    if (i == 0 || j == 0) {
        return 0
    }
    if (nusm1[i - 1] === nums2[j - 1]) {
        return lcs(nusm1, i - 1, nums2, j - 1) + 1;
    }
    return Math.max(lcs(nusm1, i - 1, nums2, j), lcs(nusm1, i, nums2, j - 1))
} */

/* function lcs(nums1: number[], nums2: number[]) {
    if (nums1 == null || nums1.length == 0)
        return 0;
    if (nums2 == null || nums2.length == 0)
        return 0;
    let dp = new Array(nums1.length + 1).fill(new Array(nums2.length + 1).fill(0))
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[nums1.length][nums2.length]
}
 */

/* function lcs(nums1: number[], nums2: number[]) {
    if (nums1 == null || nums1.length == 0)
        return 0;
    if (nums2 == null || nums2.length == 0)
        return 0;
    let dp = new Array(2).fill(new Array(nums2.length + 1).fill(0))
    for (let i = 1; i <= nums1.length; i++) {
        let row = i & 1;
        let prevRow = (i - 1) & 1;
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[row][j] = dp[prevRow][j - 1] + 1
            } else {
                dp[row][j] = Math.max(dp[prevRow][j], dp[row][j - 1])
            }
        }
    }
    return dp[nums1.length & 1][nums2.length]
} */

/* function lcs(nums1: number[], nums2: number[]) {
    if (nums1 == null || nums1.length == 0)
        return 0;
    if (nums2 == null || nums2.length == 0)
        return 0;
    let dp = new Array(nums2.length + 1).fill(0)
    for (let i = 1; i <= nums1.length; i++) {
        let cur = 0;
        for (let j = 1; j <= nums2.length; j++) {
            let leftTop = cur
            cur = dp[j]
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[j] = leftTop + 1;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1])
            }
        }
    }
    return dp[nums2.length]
} */

/* function lcs(nums1: number[], nums2: number[]) {
    if (nums1 == null || nums1.length == 0)
        return 0;
    if (nums2 == null || nums2.length == 0)
        return 0;
    let rowsNums = nums1, colsNums = nums2;
    if (nums1.length < nums2.length) {
        colsNums = nums1;
        rowsNums = nums2;
    }
    let dp = new Array(colsNums.length + 1).fill(0)
    for (let i = 1; i <= rowsNums.length; i++) {
        let cur = 0
        for (let j = 1; j <= colsNums.length; j++) {
            let leftTop = cur
            cur = dp[j]
            if (rowsNums[i - 1] === colsNums[j - 1]) {
                dp[j] = leftTop + 1;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1])
            }
        }
    }

    return dp[colsNums.length]
} */

function lcs(text1: string, text2: string) {
    if (text1 == null || text2 == null) {
        return 0
    }
    let chars1 = text1.split('')
    if (chars1.length == 0) {
        return 0
    }
    let chars2 = text2.split('')
    if (chars2.length == 0) {
        return 0
    }
    let rowsChars = chars1, colsChars = chars2;
    if (chars1.length < chars2.length) {
        colsChars = chars1;
        rowsChars = chars2;
    }
    let dp = new Array(colsChars.length + 1).fill(0)
    for (let i = 1; i <= rowsChars.length; i++) {
        let cur = 0;
        for (let j = 1; j <= colsChars.length; j++) {
            let leftTop = cur
            cur = dp[j]
            if (rowsChars[i - 1] == colsChars[j - 1]) {
                dp[j] = leftTop + 1
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1])
            }
        }
    }
    return dp[colsChars.length]
}
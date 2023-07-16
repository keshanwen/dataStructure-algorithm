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
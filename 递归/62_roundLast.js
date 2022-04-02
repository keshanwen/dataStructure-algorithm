var lastRemainings = function(n, m) {
    // 走几步
    let arr = []
    for (let i = 0; i < n;i++) {
        arr.push(i)
    }

    let i = 1
    let len = arr.length
    let stepIndex = 0
    while(len > 1) {
        stepIndex = stepIndex + m - 1
        stepIndex = stepIndex + 1 >= len ? (stepIndex + 1) % len - 1: stepIndex 
        // 处理边界情况
        if (stepIndex === -1) {
            stepIndex = len - 1
        }
        const temp = arr.splice(stepIndex,1)
        len--
        i++
    }

    return arr.join('')
};


// 类比circleQueue.js的解题思路
var lastRemaining = (n,m) => {
    let arr = []
    for (let i = 0;i < n;i++) {
        arr.push(i)
    }

    let eliminated;

    while(arr.length > 1) {
        for (let i = 0; i < m - 1; i++) {
            arr.push(arr.shift())
        }

        eliminated = arr.shift()
    }

    return arr.shift()
}

console.log(lastRemaining(2,2))


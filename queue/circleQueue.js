const Queue = require('./index')

// 循环队列的一个例子就是击鼓传花游戏（Hot Potato）。在这个游戏中，孩子们围城一个圆圈，
// 击鼓的时候把花尽快的传递给旁边的人。某一时刻击鼓停止，这时花在谁的手里，谁就退出圆圈直到游戏结束。
// 重复这个过程，直到只剩一个孩子（胜者）。
// 实现击鼓传花

function hotPotato(nameList, num) {
    const queue = new Queue()

    for ( let i = 0; i < nameList.length; i++ ) {
        queue.enqueue(nameList[i])
    }

    let eliminated = ''

    while(queue.size() > 1) {
        // 循环 num 次，队首出来去到队尾
        // 指针永远指在第一位
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }

        // 循环 num 次过后，移除当前队首的元素
        eliminated = queue.dequeue()
        console.log(`${eliminated} 在击鼓传花中被淘汰！`)
    }

    // 到最后只剩一个元素
    return queue.dequeue()
}

  // 测试
  var nameList = ["John", "Jack", "Camila", "Ingrid", "Carl"];
  var winner = hotPotato(nameList, 10);
  console.log(`最后的胜利者是：${winner}`);
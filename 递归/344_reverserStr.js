var reverseString = function(s) {
    let len = s.length
    if (len === 1) return s
    // 循环次数
    let forNum = len%2 === 0 ? len / 2 : (len - 1) / 2
    for (let i = 1 ; i <= forNum;i++) {
        // 如果相同那么跳过本次循环
        if ( s[len - i] === s[i-1]) continue
        const temp = s[len - i]
        s[len - i] = s[i-1]
        s[i - 1] = temp
    }
    return s
};

//const s = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]

//const result = ["a","m","a","n","a","P"," ",":","l","a","n","a","c"," ","a"," ",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]
               //['a','m','a','n','a','P',' ',':','l','a','n','a','c',' ',' ','a',',','n','a','l','p',' ','a',' ',',','n','a','m',' ','A']
const s = ['a','b','c','d']               
console.log(reverseString(s))
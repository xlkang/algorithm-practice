/**
 * 《剑指》P51 面试题 5
 * 字符串： 替换空格
 * 
 * 请实现一个函数，把字符串中的每个空格替换成"%20"。
 * eg： "We are happy" -> "We%20are%20happy"
 * 
 * 特殊说明： c/c++中字符串不能修改，移动字符需要时间，
 * 这里只是js模拟实现算法，并不代表js中需要如此操作
 */

const testStr = "We are  happy"

// 时间复杂度O(n)
function replaceSpace (str) {
    let newStr = ""
    // 空格数
    let space_num = 0;
    for(let i = 0; i<str.length;i++){
        if(str[i] === " ") space_num += 1
    }

    // 初始化两个分别指向新旧字符串结尾的指针
    let o_p1 = str.length - 1,
        n_p2 = str.length + space_num * 2 - 1

    // 从后往前遍历复制
    while(o_p1 >= 0 && n_p2 >= 0 ) {
        if(str[o_p1] === " "){
            newStr = "%20" + newStr
            o_p1 -= 1
            n_p2 -= 3
        } else {
            newStr = str[o_p1] + newStr
            o_p1 -= 1
            n_p2 -= 1
        }
    }

    return newStr;
}

// const result = replaceSpace(testStr)
// console.log(result)
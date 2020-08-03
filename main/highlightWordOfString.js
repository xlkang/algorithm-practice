/**
 * 《剑指》P51 面试题 5 延伸
 * 字符串： 替换空格
 * 
 * 延伸：
 * 将字符串中指定的区间高亮
 */

// 时间复杂度O(n)
const intervals = [[1, 3],[9, 12],[14, 20]]
var str = "c一般指c语言。C语言是一门面向过程的、抽象化的通用程序设计语言，广泛应用于底层开发。C语言能以简易的方式编译、处理低级存储器。C语言是仅产生少量的机器语言以及不需要任何运行环境支持便能运行的高效率程序设计语言"

function highlightWordOfString (str, intervals) {
    var intervalMap = {}
    for(var i = 0;i<intervals.length;i++){
        intervalMap[intervals[i][0]] = intervals[i][1]
    }
    let result = "",
        pointer = 0,
        end = null

    // 从前往后遍历复制
    while(pointer <= str.length) {
        if(pointer === end){
            result += (str[pointer] + "</span>")
            end = null
        } else if (pointer in intervalMap){
            result += ("<span style='color: red'>" + str[pointer])
            end = intervalMap[pointer]
        } else {
            result += str[pointer]
        }

        pointer += 1
    }

    return result;
}
// const result = highlightWordOfString(str, intervals)
// console.log(result)
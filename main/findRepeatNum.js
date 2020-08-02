/**
 * 《剑指》P39 面试题3
 * 一.找出数组中重复数字
 * 
 * 在一个长度为n的数组里的所有数字都在0～n-1的范围内，
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次，
 * 请找出数组中任意一个重复的数字
 */

const testArr = [2, 1, 4, 2, 1]

// 考虑特殊情况，利用数组下标连续的特性，时间复杂度O(n)，空间复杂度O(1)
function findRepeatNum (arr) {
    for(let i=0;i<arr.length;i++){
        while(arr[i] !== i){ // 比较当前索引和值，如果不相等
            if(arr[i] === arr[arr[i]]) { // 如果以cur为索引的位置上的值等于cur，则说明找到一个重复数字
                console.log(arr[i])
                break; // 找到重复数字以后退出循环
            } else { // 否则把cur和arr[cur]的值交换
                const temp = arr[i]
                arr[i] = arr[temp]
                arr[temp] = temp
            }
        }
    }
}

// 用map的形式,时间复杂度O(n)，时间复杂度O(n)
const NumberMap = {}

function findRepeatNumByMap (arr) {
    for(let i=0;i<arr.length;i++){
        if(NumberMap[arr[i]]) {
            console.log(arr[i])
        } else {
            NumberMap[arr[i]] = arr[i]
        }
    }
}

// findRepeatNum(testArr)
// findRepeatNumByMap(testArr)
/**
 * 《剑指》P41 面试题3
 * 二.不修改数组找出重复的数字
 * 
 * 在一个长度为n+1的数组里的所有数字都在1～n的范围内，
 * 所以数组中至少有一个数字是重复的，
 * 请找出数组中任意一个重复的数字，但不能修改输入的数组
 */

const testArr = [2, 1, 5, 4, 3, 2, 6, 7]

// 二分思想，时间复杂度O(nlogn)，空间复杂度O(1)
function findRepeatNum (arr) {
    const length = arr.length
    // 1~length-1
    let start = 1,
        end = length - 1;
    
    while(end >= start) {
        // 中间数
        const middle = Math.floor((end-start)/2) + start
        // 查询前段数字出现次数
        const count = couterRange(arr, start, middle)

        // 二分
        // 如果出现次数大于这一段数字的个数，则说明这一段中有重复数字
        if(count > (middle - start +1)){
            // start ～ middle
            end = middle
        } else {
            // middle + 1 ~ end
            start = middle + 1
        }

        // 如果索引碰头（收敛到最后一个重复数字）
        if(end === start) {
            if(count > 1) {
                // 重复数字
                console.log('repeat===', start)
                return start
            } else {
                // 没有结果
                break;
            }
        }
    }
    return -1;
}

// 统计数字区间（例如1～4）在arr中出现的次数
// couterRange(arr, 1, 4)
function couterRange(arr, start, end) {
    const length = arr.length
    if(!length) return 0;
    let count = 0;
    for(let i = 0;i < length;i++){
        if(arr[i] >= start && arr[i]<= end){
            ++count
        }
    }
    return count;
}

// 用map的形式,时间复杂度O(n)，时间复杂度O(n)
const NumberMap = {}

function findRepeatNumByMap (arr) {
    const length = arr.length
    for(let i=0;i<length;i++){
        if(NumberMap[arr[i]]) {
            console.log(arr[i])
        } else {
            NumberMap[arr[i]] = arr[i]
        }
    }
}

// findRepeatNum(testArr)
// findRepeatNumByMap(testArr)
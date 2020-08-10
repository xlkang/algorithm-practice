/**
 * 《剑指》P82 面试题11
 * 旋转数组的最小数字
 * 
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组中最小元素
 * eg： {3, 4, 5, 1, 2}为{2, 3, 4, 5, 1}的一个旋转，该数组的最小值为1
 */

// 数据集
// const arr = [7, 12, 23, 25, 2, 3]
const arr = [1, 1, 1, 1, 1, 1]

/**
 * minNumInRotateArray
 * @description 旋转数组的最小数字， 二分查找 效率O(logN)
 * @param {Array} 数据集
 * @returns {Number} 最小元素
 */
function min(arr) {
    if(!arr || !(arr instanceof Array)) throw new Error('input must be an array')
    if(!arr.length === 0) throw new Error('length must > 0')
    if(arr.length === 1) return arr[0]

    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((end-start)/2) + start
    
    // 利用旋转特性
    while(arr[start] >= arr[end]) {
        if(start ===  end - 1) {
            mid = end
            break;
        }

        mid = Math.floor((end-start)/2) + start

        // 特例： 比如{1, 0, 1, 1, 1}, 只能顺序查找
        if(arr[start] === arr[mid] && arr[mid] === arr[end]) {
            return minNumInRotateArray(arr)
        }

        if(arr[start] <= arr[mid]) {
            start = mid
        } else if(arr[mid] <= arr[end]) {
            end = mid 
        }
    }

    return arr[mid]
}

// 旋转查找 --> 顺序查找
function minNumInRotateArray(arr) {
    if(!arr || !(arr instanceof Array)) throw new Error('input must be an array')
    if(!arr.length === 0) throw new Error('length must > 0')
    if(arr.length === 1) return arr[0]

    let start = 0
    let end = arr.length - 1
    
    // 利用旋转特性
    while(arr[start] >= arr[end]) {
        start = end
        end--
    }

    return arr[start]
}

// const result = min(arr)
// console.log(result)
/**
 * 《剑指》P80 
 * 快速排序
 * 
 * 排序过程
 * 1. 在数据集之中，选择一个元素作为"基准"（pivot）。
 * 2. 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
 * 3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 */

// 数据集
const arr = [85, 24, 63, 45, 17, 31, 96, 50]

/**
 * quickSort
 * @description 快速排序
 * @param {Array} 待排序数组
 * @returns {Array} 排序后的数组
 */
function quickSort(arr) {
    if (arr.length <= 1) { return arr; }
    // 随意取出一个基准
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = []
    let right = []
    for(let i=0;i< arr.length;i++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([pivot]).concat(quickSort(right))
}

// const result = quickSort(arr)
// console.log(result)
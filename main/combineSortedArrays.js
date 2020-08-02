/**
 * 《剑指》P55 思考题
 * 合并两个排序数组
 * 
 * 有两个排序数组A1和A2，内存在A1的末尾有足够多的空余空间容纳A2
 * 请实现一个函数，把A2中的所有数字插入A1中，并且所有数字是排序的
 */

const testArr1 = [1, 3, 5, 7, 9]
const testArr2 = [2, 4, 5, 6 ,7, 8]

// 时间复杂度O(n)
function combineSortedArrays (arr1, arr2) {
    let newArr = []
    // 初始化两个分别指向数组结尾的指针
    let p1 = arr1.length - 1,
        p2 = arr2.length - 1

    // 从后往前遍历复制
    while(p1 >= 0 && p2 >= 0 ) {
        const a1 = arr1[p1],
            a2 = arr2[p2]
        if(a1 === a2){
            newArr = [a1, a1].concat(newArr)
            p1 -= 1
            p2 -= 1
        } else if(a1 < a2) {
            newArr = [a2].concat(newArr)
            p2 -= 1
        } else if(a1 > a2) {
            newArr = [a1].concat(newArr)
            p1 -= 1
        }
    }

    if(p1 < 0) {
        newArr = arr2.splice(0, p2+1).concat(newArr)
    } else {
        newArr = arr1.splice(0, p1+1).concat(newArr)
    }

    return newArr;
}

// const result = combineSortedArrays(testArr1, testArr2)
// console.log(result)
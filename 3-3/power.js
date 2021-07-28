/**
 * 《剑指》P110
 * 数值的整数次方
 * 
 * 实现函数power(base, exponent) , 求base的exponent次方，
 * 不得使用库函数，同时不需要考虑大数问题
 */

/**
 * quickSort
 * @description 快速排序
 * @param {Array} 待排序数组
 * @returns {Array} 排序后的数组
 */
function power(base, exponent) {
    if(typeof base !== "number") throw new Error("base must be Number")
    if(typeof exponent !== "number") throw new Error("exponent must be Number")

    if(exponent === 0) {
        return 1
    }
    let res = base
    for(let i = 0;i<exponent;i++) {
        res *= base
    }

    return res
}

const base = 2
const exponent = 10
const result = power(base, exponent)
console.log(result)
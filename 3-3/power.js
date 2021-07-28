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
    if(base === 0) throw new Error("base cant be Number 0")

    if(exponent === 0) {
        return 1
    }
    let res = base
    for(let i = 1;i < Math.abs(exponent);i++) {
        res *= base
    }

    return exponent > 0 ? res : 1/res
}

function power_optimization(base, exponent) {
    if(typeof base !== "number") throw new Error("base must be Number")
    if(typeof exponent !== "number") throw new Error("exponent must be Number")
    if(base === 0) throw new Error("base cant be Number 0")

    if(exponent === 0)  return 1

    function power_abs(base, exponent_abs) {
        if(exponent_abs === 0) return 1;
        if(exponent_abs === 1) return base

        let res = power_abs(base, Math.floor(exponent_abs/2))
        res *= res

        // 奇数
        if(exponent_abs % 2 === 1)  res *= base

        return res
    }

    const absres = power_abs(base, Math.abs(exponent))

    return exponent > 0 ? absres : 1/absres
}

// const base = 2
// const exponent = 10
// const result = power(base, exponent)
// const result2 = power_optimization(base, exponent)
// console.log(result)
// console.log(result2)
/**
 * 《剑指》P74 面试题10 递归解法
 * Fibonacci数列
 * 
 * 求Fibonacci数列的第n项
 * 写一个函数，输入n，求Fibonacci数列的第n项，Fibonacci数列的定义如下：
 * 
 * f(n) = 0 // n = 0 
 * f(n) = 1 // n = 1
 * f(n) = f(n-1)+f(n-2) // n > 1
 */

 let count = 0
/**
 * getNOfFibonacciByRecursion
 * @description 求Fibonacci数列的第n项, 自上而下递归解法, 复杂度O(2^n)
 * @param {Number} n
 */
/**
 * 备忘录优化
 * 
 * O(2^n) -> O(n), 需要一个空间O(n)的数组
 */
function getNOfFibonacciByRecursion(n) {
    // 递归函数调用次数是递归树的节点数
    count += 1
    if(typeof n !== 'number') throw Error('param must be a number')
    if(typeof n < 0) throw Error('param must >= 0')

    if( n === 0) {
        return 0
    } else if(n === 1) {
        return 1
    } else if(n > 1) {
        return getNOfFibonacciByRecursion(n-1) + getNOfFibonacciByRecursion(n-2)
    }
}

// const result = getNOfFibonacciByRecursion(5)
// console.log("计算次数====", count)
// console.log(result)
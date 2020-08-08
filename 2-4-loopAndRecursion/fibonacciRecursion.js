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

/**
 * getNOfFibonacciByRecursion
 * @description 求Fibonacci数列的第n项, 递归解法
 * @param {Node} pNode
 */
function getNOfFibonacciByRecursion(n) {
    if(typeof n !== 'number') throw Error('param must be a number')
    if(typeof n < 0) throw Error('param must < 1')

    if( n === 0) {
        return 0
    } else if(n === 1) {
        return 1
    } else if(n > 1) {
        return getNOfFibonacciByRecursion(n-1) + getNOfFibonacciByRecursion(n - 2)
    }
}

const result = getNOfFibonacciByRecursion(5)
console.log(result)
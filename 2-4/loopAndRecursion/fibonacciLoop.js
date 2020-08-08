/**
 * 《剑指》P74 面试题10 循环解法
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
 * @description 求Fibonacci数列的第n项, 自下而上的循环解法, 复杂度O(n)
 * @param {Number} n
 */
function getNOfFibonacciByLoop(n) {
    if(typeof n !== 'number') throw Error('param must be a number')
    if(typeof n < 0) throw Error('param must >= 0')

    if( n === 0) {
        return 0
    } else if(n === 1) {
        return 1
    }
    let fibOne = 1
    let fibTwo = 0
    let fibN = 0
    
    for(let i=2;i<=n;i++){
        fibN = fibOne + fibTwo
        fibTwo = fibOne
        fibOne = fibN
    }

    return fibN
}

// const result = getNOfFibonacciByLoop(6)
// console.log(result)
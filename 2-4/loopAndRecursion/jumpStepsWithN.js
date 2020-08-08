/**
 * 《剑指》P77 面试题10
 * 题目二：青蛙跳台阶问题（Fibonacci） 扩展
 * 
 * 一只青蛙依次可以跳上1级台阶，也可以跳上2级台阶, 也可以跳上n级。。。。
 * 求该青蛙跳上一个n级台阶总共有多少种跳法。
 */

/**
 * jumpStepsWithN
 * @description 一次可以跳1～n级，求跳n级台阶的跳法
 * @param {Number} n
 */
function jumpStepsWithN(n) {
    if(typeof n !== 'number') throw Error('param must be a number')
    if(typeof n < 1) throw Error('param must >= 1')

    if( n === 1) {
        return 1
    } else if(n === 2) {
        return 2
    }
    let fibOne = 2
    let fibTwo = 1
    let fibN = 0
    
    for(let i=3;i<=n;i++){
        fibN = fibOne + fibTwo
        fibTwo = fibOne
        fibOne = fibN
    }

    return fibN
}

// const result = jumpStepsWithN(50)
// console.log(result)
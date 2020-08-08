/**
 * 《剑指》P79 面试题10 相关题目
 * 覆盖矩形
 * 
 * 用2*1的小矩形，去无重复覆盖2*n的大矩形，有多少种方法
 * 
 * 思路：
 * 将n阶方法数量记为f(n),对于f(n)，最后一块有横放竖放两种方法，
 * 如果左边第一块竖着放，则右边剩2*(n-1),即f(n-1)
 * 如果左边第一块横着放，则右边剩2*(n-2),即f(n-2)
 * 不难看出f(n) = f(n-1) + f(n-2)
 */

/**
 * coverRectangle
 * @description 求用2*1的小矩形，去无重复覆盖2*n的大矩形的方法种数
 * @param {Number} n
 */
function coverRectangle(n) {
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
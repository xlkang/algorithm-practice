/**
 * 《剑指》P96 面试题 14 
 * 
 * 剪绳子
 * 
 * 给你一根长度为n的绳子，请把绳子剪成m段
 * （m，n都是整数，n > 1并且m > 1),
 * (注意：m > 1说明至少剪一刀)
 * 每段绳子长度记为 k[0],k[1],...,k[m]。
 * 请问： k[0]*k[1]*...*k[m]可能的最大乘积是多少？
 * 
 * 例如：当绳子长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18
 * 
 * 分别用动态规划和贪心算法解
 */

/**
 * 贪心策略：
 * 当 n >= 5时，尽可能多地剪长度为3的绳子；
 * 当剩下绳子长度为4时，把绳子剪成两端长度为2的绳子
 */
function maxProduct_greedy (len) {
  if(len < 2) return 0;
  if(len === 2) return 1;
  if(len === 3) return 2

  let timesOf3 = parseInt(len/3)
  if(len - timesOf3 === 1) {
    timesOf3 -= 1
  }

  let timesOf2 = parseInt((len - timesOf3 * 3)/2)

  return Math.pow(2, timesOf2) * Math.pow(3, timesOf3);
}


// const result = maxProduct_greedy(10)
// console.log(result)
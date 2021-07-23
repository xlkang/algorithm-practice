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
 * 思路解析：
 * 当剪第一刀的时候，有n-1种可能的选择
 * 
 * f(n) = max(f(i) * f(n - i)) (其中： 0<i<n)
 * f(2) = 1   1*1
 * f(3) = 2   2*1 > 1*1*1
 * f(4) = 3   3*1 > 1*1 
 */


// dp函数定义 f(n) = max(f(i) * f(n - i))
// 动态规划
function maxProduct_dynamic (len) {
  // 初始化base case
    if(len < 2) return 0;
    if(len === 2) return 1;
    if(len === 3) return 2;

    let products = [0, 1, 2, 3]
    let max = 0;
    
    // 两个for循环 穷举状态 （f(i)）
    for(let i = 4; i <= len; i++) {
      // 自下向上计算 f(4),f(5),....
      // 计算状态f(i)
      let _max = 0;

      for(let j = 1;j <= i/2; j++) {
        // 二分开始切

        // 状态 f(i)
        let product = products[j] * products[i - j] // 进行状态转移
        // 选择 作出最优选择
        if(product > _max) {
          _max = product
        }

        products[i] = _max
      }
    }

    max = products[len]

    return max;
}

// 贪心
function maxProduct_greedy (len) {
    
  return 0;
}


// const result = maxProduct_dynamic(10)
// console.log(result)
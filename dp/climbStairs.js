/**
 * 动态规划
 * 70. 爬楼梯
 * 
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。
 * 你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 */

let count1 = 0
let count2 = 0

/**
 * maxSubArray
 * @param {number}} number
 * @return {number}
 */
function climbStairs_exhaustion (number) {
  count1 += 1
  if(number < 1) return 0;
  if(number === 1) return 1;
  if(number === 2) return 2;

  return climbStairs_exhaustion(number-1) + climbStairs_exhaustion(number-2)
};

function climbStairs_exhaustion_memo (number) {
  let memo = [0, 1, 2]

  function helper(number) {
    count2 += 1
    if(number < 1) return 0;
    if(number === 1) return 1;
    if(number === 2) return 2;

    let sum = [];

    for(let i = 0; i < 2;i++) {
      if(memo[number - i - 1]) {
        sum[i] = memo[number - i - 1]
      } else {
        sum[i] = helper(number - i - 1)
        memo[number - i - 1] = sum[i]
      }
    }

    return sum.reduce((s, c) => s + c, 0)
  }

  return helper(number)
};

function climbStairs_dp (n) {
  // dp[i] 表示走到第i阶的方法
  // f(n) = f(n-1) + f(n-2)
  let dp = [0, 1, 2]

  for(let i = 3;i <= n;i++) {
    // 不需要做决策
    dp[i] = dp[i-1] + dp[i-2]
  }

  return dp[n]
};


const case1 = 30
const result1 = climbStairs_exhaustion(case1)
const result2 = climbStairs_exhaustion_memo(case1)
const result3 = climbStairs_dp(case1)
// console.log("count1===", count1)
// console.log("count2===", count2)

console.log(result1)
console.log(result2)
console.log(result3)
/**
 * 动态规划
 * 121. 买卖股票的最佳时机
 * 
 * 给定一个数组 prices, 它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这个股票，并选择在 未来某一个不同的日子 卖出该股票。
 * 设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。
 * 如果你不能获取任何利润，返回 0。
 */
 
 /**
  * maxProfit
  * @param {number}} number
  * @return {number}
  */
function maxProfit_exhaustion (prices) {
  let max;
  for(let i = 0;i < prices.length;i++) {
    for(let j = i + 1; j < prices.length; j++) {
      if(!max) {
        max = prices[j] - prices[i]
      } else if(prices[j] - prices[i] > max){
        max = prices[j] - prices[i]
      }
    }
  }

  return max
};

function maxProfit_exhaustion_memo (prices) {
  function helper(prices) {
    let max;
    for(let i = 0;i < prices.length;i++) {
      for(let j = i + 1; j < prices.length; j++) {
        if(!max) {
          max = prices[j] - prices[i]
        } else if(prices[j] - prices[i] > max){
          max = prices[j] - prices[i]
        }
      }
    }
  }
  

  return helper(prices)
};
 
function maxProfit_dp (prices) {
  // dp[i][j]：下标为 i 这一天结束的时候，手上持股状态为 j 时，我们持有的最大现金数。
  // j = 0 当前不持股
  // j = 1 当前持股
  let len = prices.length
  if(len < 2) return 0;
  const dp = []
  for(let i = 0;i < len;i++) {
    dp.push([])
  }

  // dp[i][0] 下标为 i 这天结束的时候，不持股，手上拥有的现金数
  // dp[i][1] 下标为 i 这天结束的时候，持股，手上拥有的现金数

  // 初始化：不持股显然为 0，持股就需要减去第 1 天（下标为 0）的股价
  dp[0][0] = 0;
  dp[0][1] = -prices[0]; // -7
  
  for(let i = 1;i < len;i++) {
    /**
     * 计算第 i 天不持股的现金：
     * 
     * 昨天不持股，今天什么都不做
     * 昨天持股，今天卖出股票（现金数增加）
     */
    // dp[1][0] = Math.max(1 - )
    dp[i][0] = Math.max(prices[i] + dp[i - 1][1], dp[i - 1][0])
    /**
     * 计算第 i 天持股的现金：
     * 
     * 昨天不持股，今天买入股票
     * 昨天持股，今天什么都不做（注意：只允许交易一次，因此手上的现金数就是当天的股价的相反数）
     */
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }

  console.log(dp)

  return dp[len - 1][0]
};
 
 
 const case1 = [7,1,5,3,6,4]
//  const result1 = maxProfit_exhaustion(case1)
//  const result2 = maxProfit_exhaustion_memo(case1)
 const result = maxProfit_dp(case1)
 // console.log("count1===", count1)
 // console.log("count2===", count2)
 
 console.log(result)
//  console.log(result2)
//  console.log(result3)
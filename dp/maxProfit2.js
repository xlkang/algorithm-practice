/**
 * 动态规划
 * 122. 买卖股票的最佳时机2
 * 
 * 给定一个数组 prices, 它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。
 * 你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 如果你不能获取任何利润，返回 0。
 * 
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */
 
 /**
  * maxProfit2
  * @param {number} number
  * @return {number}
  */
function maxProfit2_exhaustion (prices) {
  /**
   * 暴力
   * 根据当前是否持有股票选择相应的操作。
   * 持有： 不操作/卖出
   * 不持有： 不操作/买入
   */
  let len = prices.length;
  let cash = 0
  // let status = 0 // 0表示不持有，1表示持有
  let res = [];
  let tracks = []

  function backtrack(arr, status) {
    let temp = [...arr]
    if(!arr.length) {
      res.push(cash)
      return;
    }

    for(let i = 0;i < arr.length; i++) {
      if(status === 0) {
        // 未持有: 买入或者是不操作
        for(let k = 0; k<2;k++) {
          // 买入或者 不买入
          if(k === 1) {
            // 买入
            cash = cash - arr[i]
            backtrack(arr.slice(i+1), 1)
            cash = cash + arr[i]
          } else {
            backtrack(arr.slice(i+1), 0)
          }
        }
        // 做选择
      } else {
        // 持有
        for(let k = 0; k<2;k++) {
          // 卖出或者不卖出
          if(k === 1 && cash + arr[i] > 0) {
            // 卖出
            cash = cash + arr[i]
          }
          backtrack(arr.slice(i+1), k)
        }
      }
    }
  }

  backtrack(prices, 0)

  console.log(res)
};

function maxProfit2_exhaustion_memo (prices) {
};
 
function maxProfit2_dp (prices) {
  let len = prices.length;
  if (len < 2) {
      return 0;
  }

  // cash：持有现金
  // hold：持有股票
  // 状态数组
  // 状态转移：cash → hold → cash → hold → cash → hold → cash
  let cash = [];
  let hold = [];

  cash[0] = 0;
  hold[0] = -prices[0];

  for (let i = 1; i < len; i++) {
      // 这两行调换顺序也是可以的
      cash[i] = Math.max(cash[i - 1], hold[i - 1] + prices[i]);
      hold[i] = Math.max(hold[i - 1], cash[i - 1] - prices[i]);
  }

  return cash[len - 1];
};
 
 
const case1 = [7,1,5,3,6,4]
//  const result = maxProfit2_exhaustion(case1)
//  const result2 = maxProfit_exhaustion_memo(case1)
// const result = maxProfit2_dp(case1)
// console.log("count1===", count1)
// console.log("count2===", count2)
 
// console.log(result)
//  console.log(result2)
//  console.log(result3)

// const result = findMedianSortedArrays([3], [-2, -1])
// console.log(result)
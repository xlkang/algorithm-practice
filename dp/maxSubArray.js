/**
 * 动态规划
 * 77. 最大子序和
 * 
 * 给定一个整数数组 nums，找到一个具有最大和的连续子数组
 * （子数组最少包含一个元素），返回其最大和。
 * 
 */

/**
 * maxSubArray
 * @param {Array<number>}} nums
 * @return {number}
 */
function maxSubArray_exhaustion (nums) {
  let max;
  if(nums.length === 1) return nums[0]

  function cal(arr) {
    return arr.reduce((sum, cur) => sum + cur, 0);
  }

  for(let i=0;i< nums.length - 1; i++) {
    for(let j = i;j<nums.length- 1;j++) {
      const newArr = [...nums]
      const result = cal(newArr.slice(i, j + 1))
      if(!max) {
        max = result
      } else {
        max = Math.max(max, result)
      }
    }
  }

  return max
};

function maxSubArray_exhaustion_memo (nums) {
  // memo[i][j]表示 i,j之间的最大子序和
  const memo = []
  for(let i = 0;i<nums.length;i++) {
    memo.push([])
  }

  function helper (nums) {
    let max;
    if(nums.length === 1) return nums[0]

    function cal(arr) {
      return arr.reduce((sum, cur) => sum + cur, 0);
    }

    for(let i=0;i< nums.length - 1; i++) {
      for(let j = i;j<nums.length- 1;j++) {
        if(memo[i][j]) continue;
        const newArr = [...nums]
        const result = cal(newArr.slice(i, j + 1))
        if(!max) {
          max = result
        } else {
          max = Math.max(max, result)
        }
        memo[i][j] = max
      }
    }

    return max
  }
  

  return helper(nums)
};

/**
 * 
 * 以子序列的结束节点为基准，先遍历出以某个节点为结束的所有子序列，
 * 因为每个节点都可能会是子序列的结束节点，因此要遍历下整个序列，
 * 如: 以 b 为结束点的所有子序列: [a , b] [b] 
 * 以 c 为结束点的所有子序列: [a, b, c] [b, c] [ c ]。
 * 
 */
function maxSubArray_dp (nums) {
  // case [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  // dp[i]表示 以i个数结尾的数组最大子序和
  let dp = []
  dp[0] = nums[0] // -2

  // 先计算得到每个结束点的最大子序列列表dp
  for (let i = 1; i < nums.length; i++) {
    // 以每个位置为终点的最大子数列, 都是基于其前一位置的最大子数列计算得出
    // 注意子序列是连续的，所有有这个推论
    dp[i] = Math.max(dp[i-1] + nums[i], nums[i]) 
  }

  // 从dp中找到最大的那一个
  let max = nums[0]
  for(let i = 0;i<dp.length;i++) {
    max = Math.max(dp[i], max)
  }

  console.log(dp)

  return max
};

// 以上dp算法优化空间复杂度
function maxSubArray_dp_optimization (nums) {
  let max = nums[0]
  // sum存储当前循环位置i之前的 i-1的最大子序和
  let sum = nums[0]

  // 先计算得到每个结束点的最大子序列列表dp
  for (let i = 1; i < nums.length; i++) {
    // 以每个位置为终点的最大子数列, 都是基于其前一位置的最大子数列计算得出
    // 注意子序列是连续的，所有有这个推论
    // 可以写成 sum > 0
    if(sum + nums[i] > nums[i]) {
      sum = sum + nums[i]
    } else {
      sum = nums[i]
    }

    max = Math.max(sum, max)
  }

  return max
};

const case1 = [-2,1,-3,4,-1,2,1,-5,4]
// const result = maxSubArray_exhaustion(case1)
// const result2 = maxSubArray_exhaustion_memo(case1)
// const result3 = maxSubArray_dp(case1)
// const result4 = maxSubArray_dp_optimization(case1)
// console.log(result4)
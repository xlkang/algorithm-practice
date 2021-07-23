/**
 * 动态规划
 * 77. 编辑距离
 * 
 * 给你两个单词 word1 和 word2，
 * 请你计算出将 word1 转换成 word2 所使用的最少操作数。
 * 
 * 你可以对一个单词进行如下三种操作：
 * - 插入一个字符
 * - 删除一个字符
 * - 替换一个字符
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 function minDistance (s1, s2) {
  // 定义： dp[i][j] 返回 s1[0, ..., i-1] 和s2[0,...,j-1] 的最小编辑距离
  let dp = []
  dp.push([0])
  for(let i = 1;i <= s1.length;i++) {
      dp.push([i])
  }
  for(let j = 1;j <= s2.length;j++) {
      dp[0][j] = j
  }

  console.log(dp)

  for(let i = 1;i <= s1.length;i++) {
      for(let j = 1;j <= s2.length;j++) {
          if(s1[i-1] === s2[j-1]) {
              dp[i][j] = dp[i - 1][j - 1]
          } else {
              dp[i][j] = Math.min(
                  dp[i - 1][j] + 1, //
                  dp[i][j - 1] + 1, //
                  dp[i-1][j-1] + 1 
              )
          }
      }
  }

  return dp[s1.length][s2.length]
};


const result = minDistance("horse", "ros")
console.log(result)
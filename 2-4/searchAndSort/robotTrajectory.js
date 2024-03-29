/**
 * 《剑指》P92 面试题13
 * 机器人的运动轨迹
 * 
 * 地上有一个m行n列的方格，一个机器人从坐标（0，0）的格子开始移动
 * 它每次可以向四个方向移动一格，但不能进入行坐标和列坐标的数位之和大于k的格子
 * 例如，当k为18时，机器人能够进入放格（35，37），因为（3+5+3+7）=18.
 * 但它不能进入（35，38），因为（3+5+3+8）= 19。
 * 
 * 请问机器人能够到达多少个格子
 */


/**
 * robotTrajectory
 * @description 机器人的运动轨迹
 * @param {number} 行数
 * @param {number} 列数
 * @param {number} 数位之和阈值
 * 
 * @returns {number} 可访问格子数
 */
function robotTrajectory(rows, cols, k) {
  let result = 0
  let current = [0, 0]
  let matrix = []
  for(let i = 0;i<cols;i++){
    matrix.push([])
  }

  function getDigitSum(num) {
    let sum = 0;
    while(num > 0) {
      sum += num % 10 
      num = Math.floor(num / 10)
    }

    return sum
  }

  function checkThreshold (i, j, k) {
    return getDigitSum(i) + getDigitSum(j) <= k
  }

  function movingCountCore(m, n, i, j, k) {
    if(i < 0 || j < 0 || i > m - 1 || j > n - 1) return 0

    // 未访问 四周的到达数目 + 1
    if(!matrix[i][j] && checkThreshold(i, j, k)) {
      // 递归之前做选择
      matrix[i][j] = true

      return movingCountCore(m, n, i + 1, j, k) + 
          movingCountCore(m, n, i, j + 1, k) + 
          movingCountCore(m, n, i - 1, j, k) + 
          movingCountCore(m, n, i, j - 1, k) + 1
    }

    // 递归之后撤回选择
    // 已访问 0
    return 0
  }

  return movingCountCore(rows, cols, 0, 0, k)
}

// const result = robotTrajectory(6, 8, 2)
// console.log(result)
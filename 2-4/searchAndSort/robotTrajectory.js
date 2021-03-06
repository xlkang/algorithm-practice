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
  * a[x][y]  矩阵 左上角为坐标系原点
  * 
  * a b t g  
  * c f c s
  * j d e h
  */

 const matrix = [['a', 'c', 'j'], ['b', 'f', 'd'], ['t', 'c', 'e'], ['g', 's', 'h']]
 const path = 'bfde'

/**
 * pathInMatrix
 * @description 矩阵中的路径
 * @param {Array} 矩阵
 * @param {String} 路径
 * @returns {Boolean} 是否查到路径
 */
function robotTrajectory(matrix, path) {
    
}

// const result = hasPath(matrix, path)
// console.log(result)
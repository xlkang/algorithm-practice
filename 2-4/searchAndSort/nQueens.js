/**
 * 延伸
 * 八皇后问题
 * 
 * 八皇后问题是一个古老而著名的问题，是回溯算法的典型例题。
 * 该问题是十九世纪著名的数学家高斯1850年提出：
 * 
 * 在8X8格的国际象棋上摆放八个皇后（棋子），使其不能互相攻击，
 * 即任意两个皇后都不能处于同一行、同一列或同一斜线上。
 * 
 * 求坐标
 */

/**
 * getNQueenCount
 * @description N皇后问题
 * @param {number} 矩阵尺寸
 * 
 * @returns {number} 可访问格子数
 */
function getNQueenCount(size = 4) {
  let queens = []
  let count = 0
  let a = 0;
  let i = 0
  while(i < size) {
    queens.push([])
    i++
  }

  function check(row, column, size) {
    // 检查行列
    for(let k = 0; k < size; k++) {
      if(queens[k][column] === 1) return false
    }
        
    // 检查主对角线  
    for(let i = 0; i < size; i++) {
      let j = row + column - i;
      if(i !== row && queens[i][j] === 1) return false
    }

    // 检查主对角线  
    for(let i = 0; i < size; i++) {
      let j = column - row+ i;
      if(i !== row && queens[i][j] === 1) return false
    }

    return true
  }

  function findQueen(row) {
    a += 1
    if(row > size - 1) {
      // 8行选择结束，记录一个count
      count += 1
      return;
    }
    
    for(let j = 0; j < size; j++) {
      if(!queens[row][j] && check(row, j, size)) {
        // 做选择
        queens[row][j] = 1

        findQueen(row+1)
      }
      
      // 取消选择
      queens[row][j] = 0
    }
  }

  findQueen(0)

  console.log("执行次数", a)
  return count
}

const result = getNQueenCount(8)
console.log(result)
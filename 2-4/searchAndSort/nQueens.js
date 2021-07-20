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
  let result = []
  let queens = []
  let count = 0

  let i = 0
  while(i < size) {
    queens.push([])
    let j = 0
    while(j < size) {
      queens[i].push('.')
      j++
    }
    i++
  }

  function check(row, col, size) {
    // 检查列
    for(let k = 0; k < size; k++) {
      if(queens[k][col] === 'Q') return false
    }
        
    // 检查主对角线  
    for(let i = 0; i < size; i++) {
      let j = row + col - i;
      
      if(queens[i][j] === 'Q') return false
    }
  
    // 检查副对角线  
    for(let i = 0; i < size; i++) {
      let j = col - row + i;
      if(queens[i][j] === 'Q') return false
    }
  
    return true
  }

  function findQueen(row) {
    if(row === size) {
      // 8行选择结束，记录一个count
      count += 1
      let i = 0;
      let path = []
      while(i < size) {
        path.push(queens[i].join(""))
        i++
      }
      console.log("path", path)
      result.push(path)
      return;
    }
    
    // 列循环
    for(let col = 0; col < size; col++) {
      // 排除可以互相攻击的棋子
      if(!check(row, col, size)) continue;

      // 做选择
      queens[row][col] = 'Q'
      findQueen(row + 1)
      // 撤销选择
      queens[row][col] = '.'
    }
  }

  findQueen(0)

  return {
    count,
    queens: result
  }
}

const result = getNQueenCount(4)
console.log(result)
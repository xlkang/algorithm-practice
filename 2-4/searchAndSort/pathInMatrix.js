/**
 * 《剑指》P89 面试题12
 * 矩阵中的路径
 * 
 * 请设计一个函数，用来判断在一个矩阵中是否存在一个包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左，右，上，下移动一格。
 * 如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
 * 
 * eg：在下面的3*4的矩阵中包含一条字符串‘bfce’的路径。但矩阵中不包含字符串‘abfb’的路径，
 * 因为字符串的第一个字母b占据了矩阵中的第一行第二个格子后，路径不能再次进入这个格子。
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
function hasPath(matrix, path) {
    if(!matrix) throw new Error("param cant be null") 
    if(!(matrix instanceof Array)) throw new Error("param must be an array");
    if(!matrix.length) throw new Error("param cant be an empty array");
    if(!path) throw new Error("path cant be empty");

    const visited = []
    for(let i=0;i<matrix.length;i++){
        visited.push([])
    }

    let xlength = matrix.length,
        ylength = matrix[0].length,
        pathPointer = 0;

    function hasPathCore(x, y) {
        if(!path[pathPointer]) return true
        let hasPath = false;

        if(x >= 0 && y < ylength && y >= 0 && x < xlength && matrix[x][y] === path[pathPointer] && !visited[x][y]) {
            ++pathPointer

            visited[x][y] = true;

            hasPath = hasPathCore(x, y+1) ||
                      hasPathCore(x+1, y) ||
                      hasPathCore(x, y-1) ||
                      hasPathCore(x-1, y)
            
            if(!hasPath) {
                --pathPointer;
                visited[x][y] = false;
            }
        }

        return hasPath
    }

    for(let i = 0; i < xlength; i++) {
        for(let j = 0; j < ylength; j++) {
            if(hasPathCore(i, j)) return true;
        }
    }

    return false;
}

// const result = hasPath(matrix, path)
// console.log(result)
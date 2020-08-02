/**
 * 《剑指》P44 面试题 4
 * 二位数组中的查找
 * 
 * 在一个二维数组中，每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序，请完成一个函数
 * 输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
 */

 /** 
  * a[x][y]  左上角为坐标系原点
  * 
  * 1 2 8 9  
  * 2 4 9 12
  * 4 7 10 13
  * 6 8 11 15
  */

const testArr = [[1, 2, 4, 6], [2, 4, 7, 8], [8, 9, 10, 11], [9, 12, 13, 15]]

function findTwoDigitArray (arr, target) {
    if(!target || arr.length <= 0 ||  (arr[0] && arr.length<0)) {
        console.log(`params error`)
        return
    }
    let found = false;
    // 从右上角开始查询初始化指针
    let x_pointer = arr.length - 1
    let y_pointer = 0 

    while(x_pointer >= 0 && y_pointer <= arr[0].length - 1){
        if(arr[x_pointer][y_pointer] === target){ // 匹配成功
            console.log('arr', `[${x_pointer}][${y_pointer}]`)
            found = true
            break
        } else if(arr[x_pointer][y_pointer] > target){
            // 如果值比target大，下一步只需要在左方矩阵内查询
            --x_pointer
        } else if(arr[x_pointer][y_pointer] < target){
            // 如果值比target小，下一步只需要在下方矩阵内查询
            ++y_pointer
        }
    }

    return found;
}


// findTwoDigitArray(testArr, 7)
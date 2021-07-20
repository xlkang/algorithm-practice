/**
 * 回溯法
 * 
 * 全排列
 * 
 * 复杂度O(n^2 * n!)
 */

/**
 * 回溯算法核心框架
 * 1、回溯算法就是一种暴力穷举法。
 * 2、穷举的过程就是遍历一棵多叉树的过程
 * 3、回溯算法的代码框架和多叉树遍历的代码框架类似
 * 
 * js框架：
 * let result = []
 * let 路径 = []
 * 
 * function backtrack(选择列表) {
 *    if(满足结束条件) {
 *        result.push(路径.join(""))
 *    }
 * 
 *    for(选择： 选择列表) {
 *        做选择；
 *        backtrack(选择列表);
 *        撤销选择
 *    }
 * }
 */

/**
 * solution
 * @description 全排列问题
 * @param {Array}} 选择列表
 * 
 * @returns {Array} 可访问格子数
 */
function solution(nums) {
  let result = []
  // 路径
  let tracks = []

  function backtrack() {
    if(tracks.length === nums.length) {
      // 到达叶子节点
      result.push(tracks.join(""))
      return
    }
    
    for(let i = 0; i < nums.length; i++) {
      if(tracks.includes(nums[i])) continue;

      // 记录路径
      tracks.push(nums[i])
      //进入下一个节点
      backtrack(nums)
      // 退出下一个节点，删除路径
      tracks.pop()
    }
  }

  backtrack()

  return result
}

// const result = solution([1,2,3])
// console.log(result)
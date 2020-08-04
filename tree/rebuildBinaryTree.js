/**
 * 《剑指》P62 面试题 7
 * 重建二叉树
 * 
 * 输入二叉树前序遍历和中序遍历的结果，请重建该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 
 * eg： 输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6},
 * 则输出重建后的二叉树并输出它的头节点
 */

import { BinaryTree, BinaryTreeNode } from '/dataStructure/tree.js';

const node1 = new BinaryTreeNode(1)

const preOrder = [1, 2, 4, 7, 3, 5, 6, 8];
const inOrder = [4, 7, 2, 1, 5, 3, 8, 6]; 

// 时间复杂度O(n)
function rebuildBinaryTree (preOrder, inOrder) {
    // const bTree = new BinaryTree();
    // bTree.root = new BinaryTreeNode(preOrder[0], preOrder[1], null)

}

const result = rebuildBinaryTree(preOrder, inOrder)
console.log(result)
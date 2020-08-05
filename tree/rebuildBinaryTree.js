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

const preOrder = [1, 2, 4, 7, 3, 5, 6, 8];
const inOrder = [4, 7, 2, 1, 5, 3, 8, 6]; 

// 时间复杂度O(n)

function rebuildBinaryTree (preOrder, inOrder) {
    const preOrderLen = preOrder.length
    let node = new BinaryTreeNode(preOrder[0], null, null);

    if(preOrderLen === 1) { 
        // 只有根节点 直接返回
        return node;
    } else if(preOrderLen === 2) { 
        // 根节点和左节点
        node.left = preOrder[1]
    } else if(preOrderLen === 3) { 
        // 根节点和右节点
        node.left = preOrder[1]
        node.right = preOrder[2]
    } else {
        // 切割左右子树
        let i = 0;
        let leftPreOrder = []
        let leftInOrder = []
        let rightPreOrder = []
        let rightInOrder = []

        // 用前序序列第一个根节点，切割中序序列，
        // 则中序左边为左子树中序序列，右边为右子树中序序列
        while(preOrder[0] !== inOrder[i]){
            leftPreOrder.push(preOrder[i+1])
            leftInOrder.push(inOrder[i])
            i++
        }

        let j = i+1

        while(j < preOrderLen){
            rightPreOrder.push(preOrder[j])
            rightInOrder.push(inOrder[j])
            j++
        }

        // 递归左右子树
        node.left = rebuildBinaryTree(leftPreOrder, leftInOrder);
        node.right = rebuildBinaryTree(rightPreOrder, rightInOrder);
    }

    return node;
}

const root = rebuildBinaryTree(preOrder, inOrder)
// root.print()
// root.left.print()
// root.right.print()
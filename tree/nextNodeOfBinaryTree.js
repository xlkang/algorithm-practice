/**
 * 《剑指》P65 面试题 8
 * 二叉树的下一个节点
 * 
 * 给定一颗二叉树和其中的一个节点，如何找出中序遍历序列的下一个节点？
 * 树中的节点除了有两个分别指向左，右子节点的指针，还有一个指向父节点的指针
 * 
 * eg： 以下树中序遍历序列为['d', 'b', 'h', 'e', 'i', 'a', 'f', 'c', 'g']
 * 则e的下一个节点为i
 */



import { BinaryTree, BinaryTreeNode } from '/dataStructure/tree.js';

const nodea = new BinaryTreeNode('a', null, null);
const nodeb = new BinaryTreeNode('b', null, null);
const nodec = new BinaryTreeNode('c', null, null);
const noded = new BinaryTreeNode('d', null, null);
const nodee = new BinaryTreeNode('e', null, null);
const nodef = new BinaryTreeNode('f', null, null);
const nodeg = new BinaryTreeNode('g', null, null);
const nodeh = new BinaryTreeNode('h', null, null);
const nodei = new BinaryTreeNode('i', null, null);
nodea.left = nodeb
nodea.right = nodec
nodeb.left = noded
nodeb.right = nodee
nodee.left = nodeh
nodee.right = nodei
nodec.left = nodef
nodec.right = nodeg

nodeb.parent = nodea
nodec.parent = nodea
noded.parent = nodeb
nodee.parent = nodeb
nodeh.parent = nodee
nodei.parent = nodee
nodef.parent = nodec
nodeg.parent = nodec
const bt = new BinaryTree()
bt.root = nodea

const inOrder = ['d', 'b', 'h', 'e', 'i', 'a', 'f', 'c', 'g']; 

// O(n)
function nextNodeOfBinaryTree (node) {
    if(!node) throw Error('错误输入')
    if(node.right) {
        // 如果有右树，找出右树中序的起点
        return findInOrderStart(node.right)
    }
    if(!node.right) {
        // 如果没有右树，则向上查找下一个是父级左节点的节点
        return findNextIsLeftChild(node)
    } 
}

// 查找右树中序序列的起点
function findInOrderStart (node) {
    if(node.left) {
        return findInOrderStart(node.left)
    } 
    if(!node.left) {
        return node
    }
}

// 向上查找下一个是父级左节点的节点
function findNextIsLeftChild (node) {
    if(!node.parent) return null;
    if(node.parent.left === node) {
        return node.parent
    } 
    if(node.parent.right === node) {
        return findNextIsLeftChild(node.parent)
    }
}

const nextNode = nextNodeOfBinaryTree(nodea)
// nextNode.print()
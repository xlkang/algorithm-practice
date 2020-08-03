/**
 * 《剑指》P58 面试题6 递归实现
 * 从尾到头打印链表
 * 
 * 输入一个链表的头节点，从尾到头反过来打印出每个节点的值。
 * tips: 当链表太长时递归实现可能会导致调用栈溢出
 */

import { Node, LinkedList } from '/dataStructure/linkedList.js';

const linkedList = new LinkedList();
const node1 = new Node('aaa');
const node2 = new Node('bbb');
const node3 = new Node('ccc');
linkedList.head.next = node1;
node1.next = node2;
node2.next = node3;

/**
 * printLindedListfromEToS
 * @description 从尾到头打印节点
 * @param {Node} pNode 
 */
function printLindedListfromEToS_recursion(node) {
    printNext(node)
}

function printNext (node){
    if(node.next) {
        printNext(node.next)
    }
    node.print()
    return
}

printLindedListfromEToS_recursion(linkedList.head)
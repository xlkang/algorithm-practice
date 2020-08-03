/**
 * 《剑指》P58 面试题6
 * 从尾到头打印链表
 * 
 * 输入一个链表的头节点，从尾到头反过来打印出每个节点的值。
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
function printLindedListfromEToS(pNode) {
    let node = pNode;
    const nodeStack = []

    while(node) {
        nodeStack.push(node)
        node = node.next
    }

    while(nodeStack.length){
        const thisNode = nodeStack.pop();
        printNode(thisNode)
    }
}

function printNode(node) {
    console.log(node.element)
}

printLindedListfromEToS(linkedList.head)
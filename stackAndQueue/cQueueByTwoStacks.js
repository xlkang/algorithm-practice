/**
 * 实现链表
 */
export class LinkedList {
    constructor() {
        this.head = new Node( 'head' );     //头节点
    }

    find () {}          // 查找节点
    insert () {}        // 插入节点
    remove () {}        // 删除节点
    findPrev () {}      // 查找前一个节点
    display () {}       // 打印链表
}
/**
 * 实现链表节点
 */
export class Node {
    constructor(el){
        this.element = el
        this.next = null
    }

    // 打印节点
    print () {
        console.log(this.element)
    }
}

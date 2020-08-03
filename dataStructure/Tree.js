/**
 * 实现二叉树
 */
export class BinaryTree {
    constructor() {
        this.head = new Node( 'head' );     //头节点
    }

    find () {}          // 查找节点
    insert () {}        // 插入节点
    remove () {}        // 删除节点
    findPrev () {}      // 查找前一个节点
}
/**
 * 实现树节点
 */
export class TreeNode {
    constructor(data , left , right){
        this.data = data;       // 数据
        this.left = left;       // 左节点
        this.right = right;     // 右节点
    }

    // 打印节点
    print () {
        console.log(this.data)
    }
}

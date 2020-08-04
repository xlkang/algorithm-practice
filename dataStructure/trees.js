/**
 * 实现二叉树
 */
export class BinaryTree {
    constructor() {
        this.root = null;           //  根节点
    }

    insert () {};       //  插入节点
    preOrder () {};   //  先序遍历
    inOrder () {};     //  中序遍历
    postOrder () {}; //  后序遍历
    find () {};           //  查找节点
    getMin () {};       //  查找最小值
    getMax () {};       //  查找最大值
    remove () {};       //  删除节点
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

/**
 * 《剑指》P68 面试题9
 * 用两个栈实现队列
 * 
 * 用两个栈实现一个队列。队列的声明如下，
 * 请实现它的两个函数appendTail和deleteHead，
 * 分别完成在队列尾部插入节点和在队列头部删除节点的功能
 */
import { Stack } from '/dataStructure/stack.js';

class CQueueByTwoStacks {
    constructor () {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    appendTail (el) {
        this.stack1.push(el)
    }

    deleteHead () {
        if(this.stack2.size() === 0) {
            // 如果stack2为空
            while(this.stack1.size() > 0) {
                // 从stack1依次压入stack2，则stack2为倒序
                this.stack2.push(this.stack1.pop())
                // 从stack1弹出栈顶元素
            }
            return this.stack2.pop()
        } else {
            // 如果stack2不为空
            return this.stack2.pop()
        }
    }
}

// const queue = new CQueueByTwoStacks()
// queue.appendTail('s')
// queue.appendTail('3')
// queue.appendTail('4')
// console.log(queue.deleteHead())
// queue.appendTail('v')
// queue.appendTail('t')
// console.log(queue.deleteHead())
// queue.appendTail('5')
// queue.appendTail('b')
// console.log(queue.deleteHead())
// console.log(queue.deleteHead())
// console.log(queue.deleteHead())
// console.log(queue.deleteHead())
// console.log(queue.deleteHead())

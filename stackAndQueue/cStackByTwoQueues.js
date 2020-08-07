/**
 * 《剑指》P68 面试题9 延伸
 * 用两个队列实现栈
 * 
 */
import { Queue } from '/dataStructure/queue.js';

class CStackByTwoQueues {
    constructor () {
        this.queue1 = new Queue()
        this.queue2 = new Queue()
    }

    push (el) {
        // 入栈永远置于非空队列尾部
        if(this.queue1.empty()){
            this.queue2.enqueue(el)
        } else if(this.queue2.empty()){
            this.queue1.enqueue(el)
        }
    }

    pop () {
        let op, target;
        if(this.queue2.empty()) {
            op = this.queue1
            target = this.queue2
        } else if(this.queue1.empty()) {
            op = this.queue2
            target = this.queue1
        }
        while(!op.empty()) {
            // 队尾
            const tail = op.back()
            // 弹出队尾
            let el = op.dequeue()
            
            if(el === tail) {
                // 如果此次弹出元素是队尾元素，则作为栈顶弹出
                return el
            } else {
                // 否则顺次进入另一个队列
                target.enqueue(el)
            }
        }

        return 'The Stack Is Empty'
    }
}

const stack = new CStackByTwoQueues()
// stack.push('a')
// stack.push('b')
// console.log(stack.pop())
// stack.push('c')
// console.log(stack.pop())
// stack.push('8')
// console.log(stack.pop())
// console.log(stack.pop())

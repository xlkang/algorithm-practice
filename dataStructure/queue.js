/**
 * 实现队列
 */
export class Queue {
    constructor () {
        this.dataStore = [];
    }
    //入队
    enqueue (el) {
        this.dataStore.push(el)
    }
    //出队
    dequeue () {
        if(this.empty()) return 'This queue is empty';
        return this.dataStore.shift();
    }
    // 查看队首元素
    front () {
        if(this.empty()) return 'This queue is empty';
        return this.dataStore[0];
    }
    //查看队尾元素
    back () {
        if(this.empty()) return 'This queue is empty';
        return this.dataStore[this.dataStore.length - 1];
    }
    // 显示队列所有元素
    toString () {
        return this.dataStore.join('\n');
    }
    //清空当前队列
    clear () {
        delete this.dataStore;
        this.dataStor = [];
    }
    //判断当前队列是否为空
    empty () {
        if(this.dataStore.length === 0) return true;
        return false;
    }
}
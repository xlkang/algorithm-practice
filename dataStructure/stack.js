/**
 * 实现栈
 */
class Stack {
    constructor () {
        this.dataStore = [];    //初始化为空
        this.top = 0;           //记录栈顶位置
    }
    // 入栈
    push (el) {
        this.dataStore[this.top++] = el
    }
    // 出栈
    pop (el) {
        return this.dataStore[--this.top]
    }
    //查看栈内元素总数
    size () {
        return this.top
    }
    // 查看栈顶元素
    peek () {
        if( this.top > 0 ) return this.dataStore[this.top-1];
        else return 'Empty';
    }

    // 清空栈
    clear () {
        delete this.dataStore;
        this.dataStore = [];
        this.top = 0;
    }
}
export default class Stack {
  constructor(size) {
    this.size = size;
    this.stack = new Array();
  }
  isOverFLow() {
    if (this.stack.length === this.size) {
      console.log("Stack Overflow!");
      return true;
    }
    return false;
  }
  isEmpty() {
    if (this.stack.length <= 0) {
      console.log("Stack is Empty!");
      return true;
    }
    return false;
  }
  push(element) {
    if (!this.isOverFLow()) {
      this.stack.push(element);
    }
  }
  pop() {
    if (!this.isEmpty()) {
      const r = this.stack.pop();
      //   this.print();
      return r;
    }
  }
  print() {
    console.log(this.stack);
  }
  peek() {
    console.log(this.stack[this.stack.length - 1]);
  }
}

class QueueByStack {
  constructor(size) {
    this.size = size;
    this.s1 = new Stack(size);
    this.s2 = new Stack(size);
  }
  isFull() {
    return this.s1.isOverFLow();
  }
  isEmpty() {
    return this.s1.isEmpty();
  }
  enqueue(element) {
    if (this.s1.isEmpty()) {
      this.s1.push(element);
    } else {
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.pop());
      }
      this.s2.push(element);
      while (!this.s2.isEmpty()) {
        this.s1.push(this.s2.pop());
      }
      this.s1.print();
    }
  }
  dequeue() {
    if (!this.s1.isEmpty()) {
      this.s1.pop();
      this.s1.print();
    }
  }
  print() {
    this.s1.print();
  }
  head() {
    this.s1.head();
  }
}
const taskQ = new QueueByStack(3);

taskQ.enqueue("2+3");
taskQ.enqueue("console.log('HI')");
taskQ.enqueue("let a=4");
taskQ.enqueue("2+3");
taskQ.print();
taskQ.dequeue();
taskQ.dequeue();
taskQ.dequeue();
taskQ.dequeue();
taskQ.dequeue();
taskQ.dequeue();

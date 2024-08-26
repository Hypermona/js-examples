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
      this.print();
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

const bookShelf = new Stack(3);
bookShelf.isEmpty();
bookShelf.push("hello");
bookShelf.push("hello1");
bookShelf.push("hello2");
bookShelf.print();
bookShelf.push("hello3");
bookShelf.push("hell4");
bookShelf.pop();
bookShelf.pop();
bookShelf.pop();
bookShelf.pop();
bookShelf.pop();

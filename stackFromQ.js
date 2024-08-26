class Queue {
  constructor(size) {
    this.size = size;
    this.q = [];
  }
  isFull() {
    if (this.q.length === this.size) {
      console.log("queue is full");
      return true;
    }
    return false;
  }
  isEmpty() {
    if (this.q.length <= 0) {
      return true;
    }
    return false;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.q.push(element);
    }
  }
  dequeue() {
    if (!this.isEmpty()) {
      return this.q.shift();
    }
  }
  print() {
    console.log(this.q);
  }
  head() {
    console.log(this.q[0]);
  }
}
class StackFromQ {
  constructor(size) {
    this.size = size;
    this.q1 = new Queue(size);
    this.q2 = new Queue(size);
  }
  push(element) {
    if (this.q1.isEmpty()) {
      this.q1.enqueue(element);
    } else {
      this.q2.enqueue(element);
      while (!this.q1.isEmpty()) {
        this.q2.enqueue(this.q1.dequeue());
      }
      while (!this.q2.isEmpty()) {
        this.q1.enqueue(this.q2.dequeue());
      }
    }
    this.q1.print();
  }
  pop() {
    const r = this.q1.dequeue();
    console.log(r);
  }
  print() {
    this.q1.print();
  }
}

const bookShelf = new StackFromQ(3);
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

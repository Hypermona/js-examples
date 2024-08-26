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
      console.log("queue is empty!");
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
      this.q.shift();
    }
  }
  print() {
    console.log(this.q);
  }
  head() {
    console.log(this.q[0]);
  }
}

const taskQ = new Queue(3);

taskQ.isEmpty();
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

module.exports = {
  Queue,
};

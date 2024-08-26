class CQueue {
  constructor(size) {
    this.size = size;
    this.cq = new Array(size);
    this.front = -1;
    this.rear = -1;
  }
  isFull() {
    if (this.front === (this.rear + 1) % this.size) {
      console.log("Queue is FUlll");
      return true;
    }
    return false;
  }
  ifEmpty() {
    if (this.front === -1) {
      console.log("Queue is Empty!");
      return true;
    }
    return false;
  }
  peek() {
    console.log(this.cq[this.front]);
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.size;
      this.cq[this.rear] = element;
      if (this.front == -1) {
        this.front++;
      }
      this.print();
    }
  }
  dequeue() {
    if (!this.ifEmpty()) {
      this.cq[this.front] = null;
      this.front++;
      if (this.front >= this.size) {
        this.front = -1;
      }
      this.print();
    }
  }
  print() {
    console.log(JSON.stringify(this.cq), "front", this.front, "rear", this.rear);
  }
}

const cq = new CQueue(3);

cq.enqueue("1");
cq.enqueue("2");
cq.enqueue("3");
cq.enqueue("4");
cq.dequeue();
cq.dequeue();
cq.enqueue("4");
cq.enqueue("5");
cq.enqueue("9");
cq.dequeue();
cq.enqueue("6");
cq.dequeue();
cq.dequeue();
cq.dequeue();
cq.dequeue();
cq.dequeue();
cq.dequeue();
cq.enqueue("j");

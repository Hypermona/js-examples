class Node {
  constructor(data) {
    this.next = null;
    this.prev = null;
    this.data = data;
  }
}

class DoublyLinkedList {
  constructor(elements) {
    this.head = null;
    this.tail = null;
    for (const ele of elements) {
      this.append(ele);
    }
  }
  append(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
  delete(data) {
    let temp = this.head;
    while (temp && temp.data !== data) {
      temp = temp.next;
    }
    temp.next.prev = temp.prev;
    temp.prev.next = temp.next;
  }
  Insert(index, data) {
    let temp = this.head;
    let i = 0;
    const node = new Node(data);
    if (index === 0) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      return;
    }
    while (temp && i < index - 1) {
      temp = temp.next;
      i++;
    }
    node.prev = temp;
    node.next = temp.next;
    temp.next.prev = node;
    temp.next = node;
  }
  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  printReverse() {
    let temp = this.tail;
    while (temp) {
      console.log(temp.data);
      temp = temp.prev;
    }
  }
}

const dnode = new DoublyLinkedList([1, 2, 3, 4]);
dnode.Insert(0, 10);
dnode.Insert(0, 6);
dnode.print();
dnode.printReverse();

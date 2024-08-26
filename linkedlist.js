class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
  }
}

class LinkedList {
  constructor(elements) {
    this.head = null;
    this.tail = null;
    for (const element of elements) {
      this.append(element);
    }
  }
  append(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }
  insert(index, element) {
    let i = 1;
    const node = new Node(element);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let temp = this.head;
    while (temp.next && i <= index - 1) {
      temp = temp?.next;
      i++;
    }
    if (temp.next === null) {
      temp.next = node;
    } else {
      node.next = temp.next;
      temp.next = node;
    }
  }
  delete(element) {
    if (this.head) {
      let temp = this.head;
      while (temp.next && temp.next.data !== element) {
        temp = temp.next;
      }
      temp.next = temp.next.next;
    }
  }
  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
  }
  reverse2(nodeArg = null) {
    const newHead = (function rev(root) {
      if (root === null || root.next === null) {
        return root;
      }
      let newRoot = rev(root.next);
      root.next.next = root;
      root.next = null;

      return newRoot;
    })(nodeArg || this.head);
    return newHead;
    // this.head = newHead;
  }
  getMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast?.next !== null) {
      fast = fast?.next?.next;
      slow = slow.next;
    }
    return slow;
  }
  checkPalindrome() {
    let curr = this.head;
    const middleNode = this.getMiddle(curr);
    console.log(middleNode);
    let tail = this.reverse2(middleNode);
    console.log(tail);
    while (curr !== null && tail !== null) {
      if (curr.data !== tail.data) {
        console.log("not a palindrome");
        return false;
      }
      curr = curr.next;
      tail = tail.next;
    }
    console.log("is a Palindrome");
    return true;
  }
}

const ll = new LinkedList(["R", "A", "D", "A", "R"]);

ll.checkPalindrome();
ll.print();

// E -> Y <- E

// arr[] => [E, Y ,E]

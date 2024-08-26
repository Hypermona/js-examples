class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
  add(next = null, random = null) {
    this.next = next;
    this.random = random;
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
n1.add(n2);
n2.add(n3, n2);
n3.add(n4, n1);
n4.add(n5);

function detectCycle(head) {
  let curr = head;
  const map = new WeakMap();
  while (curr) {
    if (map.has(curr)) {
      console.log("cycle Detected");
      return true;
    }
    map.set(curr, true);
    curr = curr.next;
  }
  console.log("No cycle");
  return false;
}
function detectCycle2(head) {
  let slow = head;
  let fast = head;
  while (slow && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      console.log("cycle Detected");
      return true;
    }
  }
  console.log("No cycle");
  return false;
}

function copy(original) {
  const map = new WeakMap();
  let temp = original;
  let newHead = null;
  let newTail = null;
  while (temp) {
    const node = new Node(temp.data);
    if (newHead === null) {
      newHead = node;
      newTail = newHead;
    } else {
      newTail.next = node;
      newTail = newTail.next;
    }
    map.set(temp, newTail);
    temp = temp.next;
  }
  temp = original;
  while (temp) {
    const sourceNode = map.get(temp);
    const targetNode = map.get(temp.random);
    sourceNode.random = targetNode;
    temp = temp.next;
  }
  console.log(newHead);
}
function copy2(original) {
  let temp = original;
  // appening new nodes next to the old nodes
  while (temp) {
    const node = new Node(temp.data);
    node.next = temp.next;
    temp.next = node;
    temp = temp.next.next;
  }
  // assigning the random pointers
  temp = original;
  while (temp) {
    if (temp.random) {
      const source = temp.random.next;
      temp.next.random = source;
    }
    temp = temp.next.next;
  }
  //breaking the bonds
  temp = original;
  const newHead = temp.next;
  let newTail = newHead;
  let oldTail = temp;
  while (temp) {
    oldTail = temp;
    newTail = temp.next;
    oldTail.next = newTail.next;
    newTail.next = oldTail.next;
    temp = oldTail.next;
  }
  console.log(newHead);
}
console.time();
copy2(n1);
console.timeEnd();

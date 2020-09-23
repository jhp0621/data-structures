//using Singly Linked List to create stacks & queues
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Stacks: Last In First Out
//Time: Insertion O(1), Removal O(1), Searching O(n), Accessing O(n)
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    //adds to the beginning of the stack
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    //removes from the beginning of the stack
    if (!this.first) return null;
    let removed = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = removed.next;
    this.size--;
    return removed.value;
  }
}

//Queues: First In First Out
//Time: Insertion O(1), Removal O(1), Searching O(n), Accessing O(n)
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    //adds to the end of the queue
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    //removes from the beginning of the queue
    if (!this.first) return null;
    let removed = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = removed.next;
    this.size--;
    return removed.value;
  }
}

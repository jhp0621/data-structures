//Singly Linked List: useful alternative to arrays when insertion and deletion at the beginning are frequently required
//Insertion O(1); Removal beg O(1); Removal end O(n); Searching O(n); Access O(n)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let curTail = this.tail;
      this.tail = newNode;
      curTail.next = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let cur = this.head,
      newTail = cur;
    while (cur.next) {
      newTail = cur;
      cur = cur.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return cur;
  }

  shift() {
    if (this.length === 0) return undefined;
    let curHead = this.head;
    this.head = curHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return curHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let curHead = this.head;
      this.head = newNode;
      this.head.next = curHead;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0,
      cur = this.head;
    while (counter !== idx) {
      counter++;
      cur = cur.next;
    }
    return cur;
  }

  set(idx, val) {
    let foundNode = this.get(idx);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let prevNode = this.get(idx - 1);
    let temp = prevNode.next
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) this.shift();
    if (idx === this.length - 1) this.pop();
    let foundNode = this.get(idx);
    let prevNode = this.get(idx - 1);
    prevNode.next = foundNode.next;
    this.length--;
    return foundNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next,
      prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

//Doubly Linked List: better than singly LL for finding nodes (searching) and can be done in half the time (but it takes up more memory given the extra previous pointer)
//Insertion O(1); Removal O(1); Searching O(n)- technically O(n/2); Access O(n)
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      // let curTail = this.tail
      // this.tail = newNode
      // curTail.next = newNode
      // this.tail.prev = curTail
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx <= this.length / 2) {
      let count = 0,
        cur = this.head;
      while (count !== idx) {
        cur = cur.next;
        count++;
      }
      return cur;
    } else {
      let count = this.length - 1,
        cur = this.tail;
      while (count !== idx) {
        cur = cur.prev;
        count--;
      }
      return cur;
    }
  }

  set(idx, val) {
    let foundNode = this.get(idx);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let beforeNode = this.get(idx - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) this.shift();
    if (idx === this.length - 1) this.pop();
    let foundNode = this.get(idx);
    foundNode.prev.next = foundNode.next;
    foundNode.next.prev = foundNode.prev;
    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }
}

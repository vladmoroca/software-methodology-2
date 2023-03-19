'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class MyList {
  constructor(...args) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    for (const arg of args) {
      this.append(arg);
    }
  }

  length() {
    return this.size;
  }

  append(data) {
    const isString = typeof data === 'string';
    if (isString && data.length === 1) {
      const node = new Node(data);
      if (this.size === 0) {
        this.head = node;
      }
      if (this.tail) {
        node.prev = this.tail;
        this.tail.next = node;
      }
      this.tail = node;
      this.size++;
    } else {
      throw new Error('Error. Wrong input data');
    }
  }

  insert(data, index) {
    const isString = typeof data === 'string';
    const isLetter = isString && data.length === 1;
    const correctIndex = (index > 0) && (index < (this.size - 1));
    if (isLetter && correctIndex) {
      const node = new Node(data);
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      node.prev = currentNode.prev;
      node.next = currentNode;
      if (currentNode.prev) currentNode.prev.next = node;
      if (currentNode.next) currentNode.prev = node;
      this.size++;
    } else {
      throw new Error('Error. Wrong input data or index');
    }
  }

  delete(index) {
    const corectIndex = (index >= 0) && (index <= (this.size - 1));
    if (corectIndex) {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      if (index === 0) {
        this.head = currentNode.next;
      } else {
        currentNode.prev.next = currentNode.next;
      }
      if (index === this.size - 1) {
        this.tail = currentNode.prev;
      } else {
        currentNode.next.prev = currentNode.prev;
      }
      this.size--;
      return currentNode.data;
    } else {
      throw new Error('Error. Wrong index');
    }
  }

  deleteAll(data) {
    const isString = typeof data === 'string';
    if (isString && data.length === 1) {
      let currentNode = this.head;
      for (let i = 0; i < this.size; i++) {
        if (currentNode.data === data) {
          currentNode = currentNode.next;
          this.delete(i);
          i--;
        } else {
          currentNode = currentNode.next;
        }
      }
    } else {
      throw new Error('Error. Wrong input data');
    }
  }

  get(index) {
    const corectIndex = (index >= 0) && (index <= (this.size - 1));
    if (corectIndex) {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.data;
    } else {
      throw new Error('Error. Wrong index');
    }
  }

  clone() {
    const clone = new MyList();
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      clone.append(currentNode.data);
      currentNode = currentNode.next;
    }
    return clone;
  }

  reverse() {
    const reverseList = new MyList();
    const size = this.size;
    for (let i = size - 1; i >= 0; i--) {
      reverseList.append(this.get(i));
    }
    this.clear();
    for (let i = 0; i < size; i++) {
      this.append(reverseList.get(i));
    }
  }

  findFirst(data) {
    const isString = typeof data === 'string';
    if (isString && data.length === 1) {
      let currentNode = this.head;
      for (let i = 0; i < this.size; i++) {
        if (currentNode.data === data) {
          return i;
        } else {
          currentNode = currentNode.next;
        }
      }
      return -1;
    } else {
      throw new Error('Error. Wrong input data');
    }
  }

  findLast(data) {
    const isString = typeof data === 'string';
    if (isString && data.length === 1) {
      let currentNode = this.tail;
      for (let i = 0; i < this.size; i++) {
        if (currentNode.data === data) {
          return i;
        } else {
          currentNode = currentNode.prev;
        }
      }
      return -1;
    } else {
      throw new Error('Error. Wrong input data');
    }
  }

  clear() {
    for (let i = 0; i < this.size;) {
      this.delete(i);
    }
  }

  extend(list) {
    const copyList = list.clone();
    let currentNode = copyList.head;
    for (let i = 0; i < copyList.size; i++) {
      this.append(currentNode.data);
      currentNode = currentNode.next;
    }

  }
}

module.exports = MyList;

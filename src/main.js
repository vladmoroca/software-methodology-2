'use strict';

class MyList {
  constructor(...args) {
    this.list = [...args];
  }

  length() {
    return this.list.length + 1;
  }

  append(data) {
    const isString = typeof data === 'string';
    if (isString && data.length === 1) {
      this.list.push(data);
    } else {
      throw new Error('Error. Wrong input data');
    }
  }

  insert(data, index) {
    const isString = typeof data === 'string';
    const isLetter = isString && data.length === 1;
    const correctIndex = (index >= 0) && (index <= (this.length() - 1));
    if (isLetter && correctIndex) {
      this.list.splice(index, 0, data);
    } else {
      throw new Error('Error. Wrong input data or index');
    }
  }

  delete(index) {
    const corectIndex = (index >= 0) && (index <= (this.length() - 1));
    if (corectIndex) {
      return this.list.splice(index, 1)[0];
    } else {
      throw new Error('Error. Wrong index');
    }
  }

  deleteAll(data) {
    const isString = typeof data === 'string';
    if (isString && data.length === 1) {
      for (let i = 0; i < this.length(); i++) {
        if (this.list[i] === data) {
          this.delete(i);
          i--;
        }
      }
    } else {
      throw new Error('Error. Wrong input data');
    }
  }

  get(index) {
    const corectIndex = (index >= 0) && (index <= (this.length() - 1));
    if (corectIndex) {
      return this.list[index];
    } else {
      throw new Error('Error. Wrong index');
    }
  }

  clone() {
    return new MyList(...this.list);
  }

  reverse() {
    this.list.reverse();
  }

  findFirst(data) {
    const isString = typeof data === 'string';
    if (isString && data.length === 1) {
      for (let i = 0; i < this.length(); i++) {
        if (this.list[i] === data) {
          return i;
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
      for (let i = this.length() - 1; i >= 0; i--) {
        if (this.list[i] === data) {
          return i;
        }
      }
      return -1;
    } else {
      throw new Error('Error. Wrong input data');
    }
  }

  clear() {
    this.list = [];
  }

  extend(list) {
    this.list.push(...list.list);
  }
}

module.exports = MyList;

'use strict';

const MyList = require('../src/main');

console.log(MyList);

describe('List tests', () => {
  test('length', () => {
    let list = new MyList();
    expect(list.length()).toBe(0);
    list = new MyList('a', 'b', 'c');
    expect(list.length()).toBe(3);
  });

  test('get', () => {
    const list = new MyList('a', 'b');
    expect(() => list.get(-1)).toThrow();
    expect(() => list.get(2)).toThrow();
    expect(list.get(1)).toBe('b');
  });

  test('append', () => {
    const list = new MyList('a', 'b', 'c');
    list.append('d');
    expect(list.length()).toBe(4);
    expect(list.get(3)).toBe('d');
  });

  test('insert', () => {
    const list = new MyList('a', 'b', 'c', 'd');
    list.insert('k', 2);
    expect(list.length()).toBe(5);
    expect(list.get(2)).toBe('k');
    expect(list.get(3)).toBe('c');
    expect(() => list.insert('g', 6)).toThrow();
    expect(() => list.insert('g', -1)).toThrow();
  });

  test('delete', () => {
    const list = new MyList('a', 'b', 'c', 'd');
    list.delete(2);
    expect(list.length()).toBe(3);
    expect(list.get(2)).toBe('d');
    expect(() => list.delete(3)).toThrow();
    expect(() => list.delete(-1)).toThrow();
  });

  test('deleteAll', () => {
    const list = new MyList('a', 'b', 'b', 'c', 'd');
    list.deleteAll('b');
    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('c');
    list.deleteAll('c');
    expect(list.length()).toBe(2);
  });

  test('clone', () => {
    const list = new MyList('a', 'b', 'c');
    const clone = list.clone();
    expect(list).toEqual(clone);
  });

  test('reverse', () => {
    const list = new MyList('a', 'b', 'c', 'd');
    list.reverse();
    expect(list.get(0)).toBe('d');
    expect(list.get(1)).toBe('c');
    expect(list.get(2)).toBe('b');
    expect(list.get(3)).toBe('a');

  });

  test('findFirst', () => {
    const list = new MyList('a', 'b', 'b', 'c', 'd');
    expect(list.findFirst('b')).toBe(1);
    expect(list.findFirst('f')).toBe(-1);
  });

  test('findLast', () => {
    const list = new MyList('a', 'b', 'b', 'c', 'd');
    expect(list.findLast('b')).toBe(2);
    expect(list.findLast('f')).toBe(-1);
  });

  test('clear', () => {
    const list = new MyList('a', 'b', 'c');
    list.clear();
    expect(list.length()).toBe(0);
    expect(() => list.get(0)).toThrow();
    expect(() => list.get(1)).toThrow();
    expect(() => list.get(2)).toThrow();
  });

  test('extend', () => {
    const list = new MyList('a', 'b', 'c');
    const extention = new MyList('d', 'e', 'f');
    list.extend(extention);
    expect(list.length()).toBe(6);
    expect(list.get(3)).toBe('d');
    expect(list.get(4)).toBe('e');
    expect(list.get(5)).toBe('f');
  });
});

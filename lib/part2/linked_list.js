/*
 * linkedlist
 */

'use strict';

function Node(item) {
  this.item = item;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype = {

  constructor: LinkedList,
  append: function (item) {
    var node = new Node(item);

    if(this.head === null) {
      this.head = node;
    } else {
      var current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
  },
  remove: function (index) {
    this.check(index);
    var current = this.head,
      previous,
      i = 0;
    if(index === 0) {
      this.head = current.next;
    } else {
      while(i++ < index) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    return current.item;
  },
  size: function () {
    var current = this.head,
      i = 0;
    while(current) {
      i++;
      current = current.next;
    }
    return i;
  },
  get: function (index) {
    this.check(index);
    var current = this.head,
      i = 0;
    while(i++ < index) {
      current = current.next;
    }
    return current.item;
  },
  check: function (index) {
    if(typeof index !== 'number') {
      throw 'index should be number';
    }
    if(index < 0 || index > this.length) {
      throw 'index should large than 0 and less than this.size()';
    }
  }
};

module.exports = LinkedList;

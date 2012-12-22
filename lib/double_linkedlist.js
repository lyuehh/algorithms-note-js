/*
 * stack_linkedlist
 */

'use strict';

function Node(item) {
  this.item = item;
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.first = null;
  this.last = null;
  this.N = 0;
}

/**
 * DoubleLinkedList size
 * @return {Number} size
 */
DoubleLinkedList.prototype.size = function () {
  return this.N;
};

/**
 * DoubleLinkedList is empty or not
 * @return {Boolean} isEmpty
 */
DoubleLinkedList.prototype.isEmpty = function () {
  return this.N === 0;
};

/**
 * Add a item to the list
 * @param {Object} item item
 */
DoubleLinkedList.prototype.append = function (item) {
  var node = new Node(item);
  node.next = this.last.next;
  this.last.next = node;
  node.prev = this.last;
  this.last = node;
};

/**
 * Get the latest item
 * @return {Object} item
 */
DoubleLinkedList.prototype.peek = function () {
  return this.first.item;
};

DoubleLinkedList.prototype.forEach = function (cb) {
  for(var i = this.first; i !== null; i = i.next) {
    cb(i.item);
  }
};

/**
 * To a array
 * @return {Array} a array
 */
DoubleLinkedList.prototype.toArray = function() {
  var all = [];
  this.forEach(function(i) {
    all.push(i);
  });
  return all.reverse();
};

/* t1.3.20 */
/**
 * Delete the item with the index
 * @param {Number} index index, from 0
 */
DoubleLinkedList.prototype.deleteIndex = function(index) {
  if(this.size() < index) {
    throw 'stack length is ' + this.size() + ', less than ' + index;
  }
  var flag = 1;
  for(var i = this.first; i !== null; i = i.next) {
    if(flag === index) {
      i.next = i.next.next;
      this.N--;
      return;
    }
    flag += 1;
  }
};

/* t1.3.21 */
/**
 * Check item exists
 * @param {Object} item item
 * @return {Boolean} exists?
 * TODO here use '===', so Array or Object will fail
 */
DoubleLinkedList.prototype.include = function (item) {
  for(var i = this.first; i !== null; i = i.next) {
    if(i.item === item) {
      return true;
    }
  }
  return false;
};

module.exports = DoubleLinkedList;

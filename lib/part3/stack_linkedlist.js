/*
 * stack_linkedlist
 */

'use strict';

function Node(item) {
  this.item = item;
  this.next = null;
}

function Stack() {
  this.first = null;
  this.N = 0;
}

/**
 * Stack size
 * @return {Number} size
 */
Stack.prototype.size = function () {
  return this.N;
};

/**
 * Stack is empty or not
 * @return {Boolean} isEmpty
 */
Stack.prototype.isEmpty = function () {
  return this.N === 0;
};

/**
 * Push item into stack
 * @param {Object} item item
 */
Stack.prototype.push = function (item) {
  var oldFirst = this.first;
  this.first = new Node(item);
  this.first.next = oldFirst;
  this.N++;
};

/**
 * Pop item out of stack
 * @return {Object} item
 */
Stack.prototype.pop = function () {
  var item = this.first.item;
  this.first = this.first.next;
  this.N--;
  return item;
};

/**
 * Get the latest item
 * @return {Object} item
 */
Stack.prototype.peek = function () {
  return this.first.item;
};

Stack.prototype.forEach = function (cb) {
  for(var i = this.first; i !== null; i = i.next) {
    cb(i.item);
  }
};

/**
 * To a array
 * @return {Array} a array
 */
Stack.prototype.toArray = function() {
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
Stack.prototype.deleteIndex = function(index) {
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
Stack.prototype.include = function (item) {
  for(var i = this.first; i !== null; i = i.next) {
    if(i.item === item) {
      return true;
    }
  }
  return false;
};

/* t1.3.24 */
/**
 * Remove after item
 * @param {Object} item item
 */
Stack.prototype.removeAfter = function (item) {
  var flag = 0; // 记录删除的数目
  for(var i = this.first; i !== null; i = i.next) {
    if(i.item === item) {
      this.first = i;
      this.N -= flag;
      return ;
    }
    flag += 1;
  }
};

/**
 * Use a string to create a stack
 * @param {String} str string
 * @return {Object} stack
 */
Stack.copy = function (str) {
  var stack = new Stack();
  var arr = str.split('');
  for (var i = 0; i < arr.length; i += 1) {
    stack.push(str[i]);
  }
  return stack;
};

module.exports = Stack;

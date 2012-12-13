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

Stack.prototype.size = function () {
  return this.N;
};

Stack.prototype.isEmpty = function () {
  return this.N === 0;
};

Stack.prototype.push = function (item) {
  var oldFirst = this.first;
  this.first = new Node(item);
  this.first.next = oldFirst;
  this.N++;
};

Stack.prototype.pop = function () {
  var item = this.first.item;
  this.first = this.first.next;
  this.N--;
  return item;
};

Stack.prototype.peek = function () {
  return this.first.item;
};

Stack.forEach = function (s, cb) {
  for(var i = s.first; i !== null; i = i.next) {
    cb(i.item);
  }
};

Stack.getAll = function(s) {
  var all = [];
  Stack.forEach(s, function(i) {
    all.push(i);
  });
  return all.reverse();
};

Stack.copy = function (str) {
  var stack = new Stack();
  var arr = str.split('');
  for (var i = 0; i < arr.length; i += 1) {
    stack.push(str[i]);
  }
  return stack;
};


module.exports = Stack;

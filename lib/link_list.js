/*
 * link_list.js
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

module.exports = Stack;

/*
 * stack.js
 */

'use strict';

function Stack() {
  this.data = [];
}

Stack.prototype.size = function () {
  return this.data.length;
};

Stack.prototype.push = function(item) {
  this.data.push(item);
};

Stack.prototype.pop = function() {
  return this.data.pop();
};

Stack.prototype.isEmpty = function () {
  return this.data.length === 0;
};

module.exports = Stack;

/*
 * bag.js
 */

'use strict';

function Bag() {
  this.data = [];
}

Bag.prototype.add = function(item) {
  this.data.push(item);
};

Bag.prototype.isEmpty = function() {
  return this.data.length === 0;
};

Bag.prototype.size = function() {
  return this.data.length;
};

module.exports = Bag;

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

if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = Bag;
  }
  exports.Bag = Bag;
} else {
  this['Bag'] = Bag;
}

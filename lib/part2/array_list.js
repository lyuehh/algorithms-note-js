/*
 * array_list
 */

'use strict';

function arraylist() {
  this.data = [];
}

arraylist.prototype = {
  constructor: arraylist,
  append: function (item) {
    this.data[this.data.length] = item;
  },
  remove: function (index) {
    this.check(index);
    var item = this.data[index];
    this.data.splice(index,1);
    return item;
  },
  size: function () {
    return this.data.length;
  },
  insert: function (index, item) {
    this.check(item);
    for (var i = this.data.length; i >= index; i -= 1) {
      this.data[i] = this.data[i-1];
    }
    this.data[index] = item;
  },
  check: function (index) {
    if(typeof index !== 'number') {
      throw 'index should be number';
    }
    if(index < 0 || index > this.data.length) {
      throw 'index should large than 0 and less than this.size()';
    }
  }
};

module.exports = arraylist;

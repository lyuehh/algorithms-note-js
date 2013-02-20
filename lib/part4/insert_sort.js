/*
 * insert_sort.js
 */

var swap = require('./util').swap;
var less = require('./util').less;

var insert_sort = function(data) {
  var N = data.length;
  for(var i=1; i < N; i++) {
    for(var j=i; j > 0 && (less(data[j], data[j-1])); j--) {
      swap(data, j, j-1);
    }
  }
};
exports.insert_sort = insert_sort;

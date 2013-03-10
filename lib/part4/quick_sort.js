/*
 * quick_sort.js
 */
var util = require('./util');
var swap = util.swap;
var less = util.less;

var quick_sort = function(data) {
  sort(data, 0, data.length - 1);
};

function sort(data, lo, hi) {
  if(hi <= lo) return;
  var j = partition(data, lo, hi);
  sort(data, lo, j-1);
  sort(data, j+1, hi);
}

function partition(data, lo, hi) {
  var i = lo, j = hi + 1;
  var v = data[lo];
  while(true) {
    while(less(data[++i], v)) if(j == hi) break;
    while(less(v, data[--j])) if(j == lo) break;
    if(i >= j) break;
    swap(data, i, j);
  }
  swap(data, lo, j);
  return j;
}
exports.quick_sort = quick_sort;

/*
 * merge_sort.js
 */
var util = require('./util');
var swap = util.swap;
var less = util.less;
var merge = util.merge;
var compress = util.compress;
var aux;

var merge_sort = function(data) {
  aux = [];
  sort(data, 0, data.length - 1);
};

function sort(data, lo, hi) {
  if(hi <= lo) return;
  var mid = parseInt(lo + (hi - lo) / 2, 10);
  console.log(lo, mid, hi);

  sort(data, lo, mid);
  sort(data, mid+1, hi);
  merge(data, lo, mid, hi, aux);
}

exports.merge_sort = merge_sort;

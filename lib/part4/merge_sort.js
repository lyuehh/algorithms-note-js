/*
 * merge_sort.js
 * from https://github.com/nzakas/computer-science-in-javascript
 */
var util = require('./util');
var swap = util.swap;
var less = util.less;

function merge(left, right){
  var result  = [],
  il      = 0,
  ir      = 0;

  while (il < left.length && ir < right.length){
    if (left[il] < right[ir]){
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

function merge_sort(items){

  if (items.length < 2) {
    return items;
  }

  var middle = Math.floor(items.length / 2),
  left    = items.slice(0, middle),
  right   = items.slice(middle),
  params = merge(merge_sort(left), merge_sort(right));
  // Add the arguments to replace everything between 0 and last item in the array
  params.unshift(0, items.length);
  items.splice.apply(items, params);
  return items;
}
exports.merge_sort = merge_sort;

var swap = function(items, i, j) {
  var temp = items[i];
  items[i] = items[j];
  items[j] = temp;
};
exports.swap = swap;

var less = function(a, b) {
  return a < b;
};
exports.less = less;

var check = function(arr) {
  var n = arr.length;
  for(var i=1; i< n; i++) {
    if(less(arr[i], arr[i-1])) {
      return false;
    }
  }
  return true;
};
exports.check = check;

/*
* 将a[lo..mid] 和a[mid+1..hi) 归并
*/
var merge = function(a, lo, mid, hi) {
  var i = lo, j = mid + 1;
  var arr = [];

  console.log('a: ' + a);
  console.log('lo: ' + lo);
  console.log('hi: ' + hi);
  for(var k=lo; k <= hi; k++) {
    arr[k] = a[k];
  }
  console.log('arr: ' + arr);

  for(k=lo; k <= hi; k++) {
    if      (i > mid)                  a[k] = arr[j++];
    else if (j > hi)                   a[k] = arr[i++];
    else if (j > less(arr[j], arr[i])) a[k] = arr[j++];
    else                               a[k] = arr[i++];
  }
};
exports.merge = merge;

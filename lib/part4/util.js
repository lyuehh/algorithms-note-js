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

var compress = function(arr) {
  var result = [];
  for(var i=0;i<arr.length;i++) {
    if(arr[i] !== void 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
exports.compress = compress;

/*
* 将a[lo..mid] 和a[mid+1..hi) 归并
*/
var merge = function(a, lo, mid, hi, arr) {
  var i = lo, j = mid + 1;
  var k;

  for(k=lo; k <= hi; k++) {
    arr[k] = a[k];
  }
  console.log('a1: ' + arr);

  for(k=lo; k <= hi; k++) {
    if      (i > mid)                  a[k] = arr[j++];
    else if (j > hi)                   a[k] = arr[i++];
    else if (j > less(arr[j], arr[i])) a[k] = arr[j++];
    else                               a[k] = arr[i++];
  }
  console.log('a2: ' + a);
};
exports.merge = merge;

var a = [0,3,4,1];
var aux = [];
merge(a, 0, 2, 4, aux);
console.log(a);

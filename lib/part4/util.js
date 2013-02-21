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

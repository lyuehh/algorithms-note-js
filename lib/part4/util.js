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

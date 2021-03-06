/*
 * shell_sort.js
 */
var swap = require('./util').swap;
var less = require('./util').less;

var shell_sort = function(data) {
  var N = data.length;
  var h = 1;
  while(h < N/3) {
    h = 3 * h + 1;
  }
  while(h >= 1) {
    for(var i = h; i<N;i++) {
      for(var j=i; j>=h && less(data[j], data[j-h]); j -= h) {
        swap(data, j, j-h);
      }
    }
    h = parseInt(h / 3, 10);
  }
};
exports.shell_sort = shell_sort;

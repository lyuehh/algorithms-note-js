/*
 * select_sort.js
 * */

var swap = function (items, i, j) {
  var temp = items[i];
  items[i] = items[j];
  items[j] = temp;
};

var select_sort = function(data) {
  var N = data.length;
  var min;
  for (var i = 0; i < N; i += 1) {
    min = i;
    for (var j = i + 1; j < N; j += 1) {
      if(data[j] < data[min]) {
        min = j;
      }
    }
    swap(data, i, min);
  }
};
exports.select_sort = select_sort;

var check = require('./util').check;
var select_sort = require('./select_sort').select_sort;
var insert_sort = require('./insert_sort').insert_sort;

var N = process.argv[2]; // 数组长度
var T = process.argv[3]; // 重复次数

function randomNumber(n) {
  var ret = [];
  for(var i =0; i< n; i++) {
    ret.push(parseInt(Math.random() * 1000000, 10));
  }
  return ret;
}

function time(fn, t) {
  var total = 0;
  for(var i=0;i<t;i++) {
    var arr = randomNumber(N);
    var now = new Date();
    fn(arr);
    var then = new Date();
    total = total + (then-now);
  }
  return total;
}

function main() {
  var select_time = time(select_sort, T);
  var insert_time = time(insert_sort, T);
  console.log('sel: ' + select_time);
  console.log('ins: ' + insert_time);
}

main();

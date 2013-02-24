var check = require('./util').check;
var select_sort = require('./select_sort').select_sort;
var insert_sort = require('./insert_sort').insert_sort;
var shell_sort = require('./shell_sort').shell_sort;
var quick_sort = require('./quick_sort').quick_sort;
var fs = require('fs');

var N = process.argv[2]; // 数组长度
var T = process.argv[3]; // 重复次数

function randomNumber(n) {
  var ret = [];
  for(var i =0; i< n; i++) {
    ret.push(parseInt(Math.random() * 1000000, 10));
  }

  // fs.writeFile('a.js', ret.join('\n'), function(err) {
  //   if(err) throw err;
  // });
  
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
  var quick_time = time(quick_sort, T);
  var shell_time = time(shell_sort, T);
  console.log('select: ' + select_time);
  console.log('insert: ' + insert_time);
  console.log('quick : ' + quick_time);
  console.log('shell : ' + shell_time);
}

main();

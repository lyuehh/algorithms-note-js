/*
 * t1.3.9
 */

'use strict';

var Stack = require('./stack_linkedlist');
var getStr = function (str) {
  var vars = new Stack();
  var opts = new Stack();
  var arr = str.split(' ');

  arr.forEach(function(i) {
    if(i === '+') {
      opts.push(i);
    } else if(i === '*') {
      opts.push(i);
    } else if(i === '-') {
      opts.push(i);
    } else if(i === ')') {
      var var_right = vars.pop();
      var opt = opts.pop();
      var var_left = vars.pop();
      var new_var = '( ' + var_left + ' ' + opt + ' ' + var_right + ' ' + ')';
      vars.push(new_var);
    } else {
      vars.push(i);
    }
  });
  return vars.pop();
};

exports.getStr = getStr;

/*
 * t1.3.10
 */

'use strict';

var Stack = require('./part3/stack_linkedlist');

var infixToPostfix = function(str) {
  var arr = str.split(' ');
  var ret = "";
  var stack = new Stack();
  arr.forEach(function(i) {
    if(i === '+') {
      stack.push(i);
    } else if(i === '*') {
      stack.push(i);
    } else if(i === ')') {
      ret += stack.pop() + ' ';
    } else if(i === '(') {
      ret += '';
    } else {
      ret += i + ' ';
    }
  });
  return ret;
};

exports.infixToPostfix = infixToPostfix;



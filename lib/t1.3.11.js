/*
 * t1.3.11
 */

'use strict';

var Stack = require('./part3/stack_linkedlist');
var util = require('util');

var evalPostifx = function(str) {
  var arr = str.split(' ');
  var stack = new Stack();
  arr.forEach(function(i) {
    if(i === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if(i === '*') {
      stack.push(stack.pop() * stack.pop());
    } else {
      stack.push(parseInt(i, 10));
    }
  });
  return stack.pop();
};

exports.evalPostifx = evalPostifx;

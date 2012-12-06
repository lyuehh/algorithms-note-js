/*
 * page: 102
 * id: 1.3.4
 * */
'use strict';

var check = function(str) {
  var ar = str.split('');
  var i,l;
  var stack = [];
  var current;

  for(i=0,l=ar.length;i<l;i++) {
    var item = ar[i];
    if(item === '[' || item === '(' || item === '{') {
      stack.push(item);
    } else if(item === ']') {
      if('[' !== stack.pop()) {
        return false;
      }
    } else if(item === ')') {
      if('(' !== stack.pop()) {
        return false;
      }
    } else if(item === '}') {
      if('{' !== stack.pop()) {
        return false;
      }
    }

  }
  return stack.length === 0;
};
exports.check = check;

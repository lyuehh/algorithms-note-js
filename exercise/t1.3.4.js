/*
 * page: 102
 * id: 1.3.4
 * */
(function() {
  'use strict';

  var str0 = '[({)]'; // false
  var str1 = '[{}([{}])]'; // true
  var str2 = '[(])'; // false
  var str3 = '{{{{{{[[[[((()))]]]]}}}}}}'; // true
  var str4 = ')[]'; // false

  var check = function(str) {
    var ar = str.split('');
    var i,l;
    var stack = [];
    var current;

    for(i=0,l=ar.length;i<l;i++) {
      var item = ar[i];
      if(item === '[' || item === '(' || item === '{') {
        stack.push(item);
        //console.log(stack);
      } else if(item === ']') {
        if('[' !== stack.pop()) {
          return false;
        }
        //console.log(stack);
      } else if(item === ')') {
        if('(' !== stack.pop()) {
          return false;
        }
        //console.log(stack);
      } else if(item === '}') {
        if('{' !== stack.pop()) {
          return false;
        }
        //console.log(stack);
      }

    }
    return stack.length === 0;
    //console.log(stack);
    //console.log(1);

  };
  console.log(check(str0));
  console.log(check(str1));
  console.log(check(str2));
  console.log(check(str3));
  console.log(check(str4));
})();

var Stack = require('../lib/stack_linkedlist');

var stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
//console.log(JSON.stringify(stack));
Stack.forEach(stack, function(i) {
  //console.log(i);
});


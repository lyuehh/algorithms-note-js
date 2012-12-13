var should = require('should');
var Stack = require('../lib/stack_array');

describe('Stack - Array', function() {
  it('constructor', function() {
    var stack = new Stack();
    stack.size().should.equal(0);
  });

  it('push', function() {
    var stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.size().should.equal(3);
  });

  it('pop', function() {
    var stack = new Stack();
    stack.push(0);
    stack.pop().should.be.equal(0);
    stack.size().should.be.equal(0);
  });

  it('size', function() {
    var stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.size().should.be.equal(2);
  });

  it('isEmpty', function() {
    var stack = new Stack();
    stack.isEmpty().should.be.ok;
    stack.push(0);
    stack.pop();
    stack.isEmpty().should.be.ok;
  });

});

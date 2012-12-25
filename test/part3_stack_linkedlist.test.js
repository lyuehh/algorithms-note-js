var should = require('should');
var Stack = require('../lib-cov/part3/stack_linkedlist');

describe('Stack - linkedlist', function() {
  it('constructor', function() {
    var stack = new Stack();
    stack.isEmpty().should.be.ok;
  });

  it('push', function() {
    var stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.size().should.be.equal(3);
  });

  it('pop', function() {
    var stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.size().should.be.equal(2);
    stack.pop().should.be.equal(1);
    stack.size().should.be.equal(1);
    stack.pop();
    stack.isEmpty().should.be.ok;
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

  it('peek', function() {
    var stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.peek().should.equal(1);
  });

  it('copy', function() {
    var str = '12345';
    var stack = Stack.copy(str);
    stack.size().should.equal(5);
    stack.pop().should.equal('5'); // 后进先出
  });

  it('deleteIndex', function() {
    var stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.size().should.equal(3);
    stack.deleteIndex(1);
    stack.size().should.equal(2);
    stack.pop().should.equal(2);
    stack.pop().should.equal(0);
  });

  it('include', function() {
    var stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.include(0).should.equal(true);
    stack.include(1).should.equal(true);
    stack.include(2).should.equal(false);
  });

  it('removeAfter', function () {
    var stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.size().should.equal(5);
    stack.removeAfter(2);
    stack.size().should.equal(3);
    stack.pop().should.equal(2);
  });
});

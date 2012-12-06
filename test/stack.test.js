var should = require('should');
var Stack = require('../lib/stack');

describe('Stack', function() {
  it('constructor', function() {
    var stack = new Stack();
    stack.data.should.have.length(0);
  });

  it('push', function() {
    var stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.data.should.have.length(3);
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

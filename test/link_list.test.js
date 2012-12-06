var should = require('should');
var Stack = require('../lib/link_list');

describe('Stack', function() {
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

});

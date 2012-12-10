var should = require('should');
var Queue = require('../lib/queue');

describe('Queue', function() {
  it('constructor', function() {
    var queue = new Queue();
    queue.size().should.equal(0);
  });

  it('enqueue', function() {
    var queue = new Queue();
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.size().should.equal(3);
  });

  it('dequeue', function() {
    var queue = new Queue();
    queue.enqueue(0);
    queue.enqueue(1);
    queue.dequeue().should.be.equal(0);
    queue.size().should.equal(1);
    queue.dequeue();
  });

  it('size', function() {
    var queue = new Queue();
    queue.enqueue(0);
    queue.enqueue(1);
    queue.size().should.equal(2);
  });

  it('isEmpty', function() {
    var queue = new Queue();
    queue.isEmpty().should.be.ok;
    queue.enqueue(0);
    queue.dequeue();
    queue.isEmpty().should.be.ok;
  });
  it('isEmpty2', function() {
    var queue = new Queue();
    queue.isEmpty().should.be.ok;
   // queue.enqueue(0);
   // queue.dequeue();
   // queue.isEmpty().should.be.ok;
  });

});

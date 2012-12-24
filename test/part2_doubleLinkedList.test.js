var should = require('should');
var LinkedList = require('../lib/part2/double_linked_list');

describe('part2: LinkedList', function() {
  it('constructor', function() {
    var linkedList = new LinkedList();
    linkedList.size().should.equal(0);
  });

  it('add', function() {
    var linkedList = new LinkedList();
    linkedList.add(0);
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.size().should.equal(5);
  });

  it('remove', function() {
    var linkedList = new LinkedList();
    linkedList.add(0);
    linkedList.add(1);
    linkedList.size().should.be.equal(2);
    linkedList.remove(0);
    linkedList.size().should.be.equal(1);
  });

  it('size', function() {
    var linkedList = new LinkedList();
    linkedList.add(0);
    linkedList.add(1);
    linkedList.size().should.be.equal(2);
  });

  it('check', function () {
    var linkedList = new LinkedList();
    linkedList.add(0);
    // FIXME  how to test throw error ???
    //linkedList.remove().should.throwError();
    //linkedList.remove(999).should.throwError();
  });
});

var should = require('should');
var LinkedList = require('../lib-cov/part2/double_linked_list');

describe('part2: DoubleLinkedList', function() {
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

  // 只有1个元素，移除
  it('remove2', function() {
    var linkedList = new LinkedList();
    linkedList.add(0);
    linkedList.size().should.be.equal(1);
    linkedList.remove(0);
    linkedList.size().should.be.equal(0);
  });

  // 有2个元素，移除最后1个
  it('remove2', function() {
    var linkedList = new LinkedList();
    linkedList.add(0);
    linkedList.add(1);
    linkedList.size().should.be.equal(2);
    linkedList.remove(1);
    linkedList.get(0).should.equal(0);
    linkedList.size().should.be.equal(1);
  });

  // 有3个元素，移除中间1个
  it('remove2', function() {
    var linkedList = new LinkedList();
    linkedList.add(0);
    linkedList.add(1);
    linkedList.add(2);
    linkedList.size().should.be.equal(3);
    linkedList.remove(1);
    linkedList.get(0).should.equal(0);
    linkedList.get(1).should.equal(2);
    linkedList.size().should.be.equal(2);
  });

  // 有3个元素，移除中间1个
  it('toArray', function() {
    var linkedList = new LinkedList();
    linkedList.add(0);
    linkedList.add(1);
    linkedList.add(2);
    linkedList.size().should.be.equal(3);
    linkedList.toArray().should.have.length(3);
    linkedList.toArray().should.include(2);
    linkedList.toString().should.equal('0,1,2');
    linkedList.toArray().should.be.an.instanceOf(Array);
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

  it('get', function() {
    var linkedList = new LinkedList();
    linkedList.add(0);
    linkedList.add(1);
    linkedList.get(0).should.equal(0);
    linkedList.get(1).should.equal(1);
  });
});

var should = require('should');
var Bag = require('../lib/bag');

describe('Bag', function() {
  it('constructor', function() {
    var bag = new Bag();
    bag.data.should.have.length(0);
  });

  it('add', function() {
    var bag = new Bag();
    bag.add(0);
    bag.add(1);
    bag.add(2);
    bag.data.should.have.length(3);
  });
  it('empty', function() {
    var bag = new Bag();
    bag.isEmpty().should.ok;
  });

  it('size', function() {
    var bag = new Bag();
    bag.add(0);
    bag.add(1);
    bag.size().should.be.equal(2);
  });
});

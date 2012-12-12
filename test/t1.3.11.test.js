var should = require('should');
var evalPostifx = require('../lib/t1.3.11').evalPostifx;

var str0 = '1 2 3 4 5 * + 6 * * +';

describe('t1.3.11', function() {
  it('evalPostifx', function() {
    evalPostifx(str0).should.be.equal(277);
  });
});

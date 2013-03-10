var should = require('should');
var isUnique = require('../lib-cov/crackcode/t11').isUnique;
var isUnique2 = require('../lib-cov/crackcode/t11').isUnique2;


var str1 = 'abcdefg';
var str2 = 'abacdgc';
describe('crackcode', function() {
  it('t1.1', function() {
    isUnique(str1).should.equal(true);
    isUnique(str2).should.equal(false);
    isUnique2(str1).should.equal(true);
    isUnique2(str2).should.equal(false);
  });
});

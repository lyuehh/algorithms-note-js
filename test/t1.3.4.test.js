var should = require('should');
var check = require('../lib/t1.3.4').check;

var str0 = '[({)]'; // false
var str1 = '[{}([{}])]'; // true
var str2 = '[(])'; // false
var str3 = '{{{{{{[[[[((()))]]]]}}}}}}'; // true
var str4 = ')[]'; // false

describe('t1.3.4', function() {
  it('check', function() {
    check(str0).should.be.equal(false);
    check(str1).should.be.equal(true);
    check(str2).should.be.equal(false);
    check(str3).should.be.equal(true);
    check(str4).should.be.equal(false);
  });
});

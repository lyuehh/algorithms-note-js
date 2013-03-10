var should = require('should');
var reverse = require('../lib-cov/crackcode/t12').reverse;


var str1 = 'abcdefg';
describe('crackcode', function() {
  it('t1.2', function() {
    reverse(str1).should.equal('gfedcba');
  });
});

var should = require('should');
var infixToPostfix = require('../lib/t1.3.10').infixToPostfix;

var str0 = '( 2 + ( ( 3 + 4 ) * ( 5 * 6 ) ) )';

describe('t1.3.4', function() {
  it('check', function() {
    infixToPostfix(str0).should.be.equal('2 3 4 + 5 6 * * + ');
  });
});

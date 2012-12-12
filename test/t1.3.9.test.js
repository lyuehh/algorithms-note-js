var should = require('should');
var getStr = require('../lib/t1.3.9').getStr;
var Stack = require('../lib/link_list');

var str0 = '1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )'; // false
var str0_ret = '( ( 1 + 2 ) * ( ( 3 - 4 ) * ( 5 - 6 ) ) )';
//var str1 = '1 + 2 ) * 3 - 4 )'; // false
//var str1_ret = '( 1 + 2 ) * ( 3 - 4 )';

describe('t1.3.9', function() {
  it('getStr', function() {
    getStr(str0).should.be.equal(str0_ret);
    //getStr(str1).should.be.equal(str1_ret);
  });

  it('stack getAll', function() {
    var s = new Stack();
    s.push(0);
    s.push(1);
    s.push(2);
    Stack.getAll(s).join().should.equal('0,1,2');
  });
});

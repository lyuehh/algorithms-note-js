var should = require('should');
var shell_sort = require('../lib-cov/part4/shell_sort').shell_sort;


var data = [1,5,2,7,3,8,9,0];
describe('sort', function() {
  it('shell_sort', function() {
    shell_sort(data);
    data.toString().should.equal('0,1,2,3,5,7,8,9');
  });
});

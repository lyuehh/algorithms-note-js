var should = require('should');
var quick_sort = require('../lib-cov/part4/quick_sort').quick_sort;


var data = [1,5,2,7,3,8,9,0];
describe('sort', function() {
  it('quick_sort', function() {
    quick_sort(data);
    data.toString().should.equal('0,1,2,3,5,7,8,9');
  });
});
